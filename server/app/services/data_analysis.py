import pandas as pd
import numpy as np
import json
import calendar
from location import get_location
from decimal import Decimal, ROUND_DOWN

with open('../../tests/dump.json', 'r') as file:
    activities_data = json.load(file)

data = {}
df = pd.DataFrame(activities_data)

# walk_km = df.loc[df["type"] == "Walk", "distance"].sum()/1000



# Top 5 sports based on distance
top_sports = (df.groupby("type")["distance"].sum()/1000).sort_values(ascending=False).head(5)
top_sports = np.trunc(top_sports * 100)/100
data['top_sports'] = top_sports.to_dict()

# Total days active, by months
# For total days we need to check unique dates in a year.
# Create months column(to re-use in other calculations), then count no. of times each month 
# exists for monthly active days

df['start_date'] = pd.to_datetime(df['start_date'], format='%Y-%m-%dT%H:%M:%SZ').dt.normalize()
df['month'] = df['start_date'].dt.month_name()
total_days = df['start_date'].nunique()
# For duplicate days
# duplicate_dates = df[df['start_date'].duplicated(keep=False)] #.count() #.nunique()
# print(len(duplicate_dates))

# Can also use df.drop_duplicates(subset='start_date') below
unique_date_rows =  df[~df['start_date'].duplicated(keep='first')]  
days_by_months = unique_date_rows['month'].value_counts() 
month_names = list(calendar.month_name)[1:] # Remove first index as its an empty string
days_by_months = days_by_months.reindex(month_names, fill_value=0).sort_values(ascending=False).head(5)
data['days'] = {'total': total_days, 'months': days_by_months.to_dict()}

# Total time spent, time spent by months
total_time = df['elapsed_time'].sum()/3600 # secs to hours
total_time = np.trunc(total_time * 100) / 100 # only take up to two decimal places
time_by_months = df.groupby('month')['elapsed_time'].sum()/3600
time_by_months = time_by_months.reindex(month_names, fill_value=0).sort_values(ascending=False).head(5)
time_by_months = np.trunc(time_by_months * 100) / 100
data['time'] = {'total':total_time.item(),'time_by_months':time_by_months.to_dict()}

# Longest streak in days
consecutive_dates = unique_date_rows['start_date'].sort_values().reset_index(drop=True)
day_difference = consecutive_dates - pd.to_timedelta(consecutive_dates.index, unit='D')
streak_lengths = day_difference.value_counts()  
max_streak = streak_lengths.max()
data['max_streak'] = max_streak.item()

# Top locations, will have to use get_location function.
df['place'] = df['start_latlng'].apply(get_location)
df = df.dropna(subset='place')
top_places = df['place'].value_counts().head(5)
data['place'] = top_places.to_dict()

print(data)