import pandas as pd
import json
import calendar

with open('../../tests/dump.json', 'r') as file:
    data = json.load(file)

df = pd.DataFrame(data)
#print(df.iloc[0])

# walk_km = df.loc[df["type"] == "Walk", "distance"].sum()/1000
# run_km = df.loc[df["type"] == "Run", "distance"].sum()/1000
# print(walk_km, run_km)

# Top sports based on distance
# top_sports = (df.groupby("type")["distance"].sum()/1000).sort_values(ascending=False)
# print(type_km)


# Total days active, by months

# For total days we need to check unique dates in a year.
# Create months column(to re-use in other calculations), then count no. of times each month 
# exists for monthly active days

df['start_date'] = pd.to_datetime(df['start_date'], format='%Y-%m-%dT%H:%M:%SZ').dt.normalize()
df['month'] = df['start_date'].dt.month_name()

# total_days = df['start_date'].nunique()

# For duplicate days
# duplicate_dates = df[df['start_date'].duplicated(keep=False)] #.count() #.nunique()
# print(len(duplicate_dates))

# Can also use df.drop_duplicates(subset='start_date') below
# unique_date_rows =  df[~df['start_date'].duplicated(keep='first')]  
# days_by_months = unique_date_rows['month'].value_counts() 
month_names = list(calendar.month_name)[1:] # Remove first index as its an empty string
# days_by_months = days_by_months.reindex(month_names, fill_value=0).sort_values(ascending=False)
# print(days_by_months)


# Total time spent, time spent by months
#total_time = df['elapsed_time'].sum()/3600 # secs to hours
#print(total_time)
#time_by_months = df.groupby('month')['elapsed_time'].sum()/3600
#time_by_months = time_by_months.reindex(month_names, fill_value=0).sort_values(ascending=False)
#print(time_by_months)