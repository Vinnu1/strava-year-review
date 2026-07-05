import pandas as pd
import json

with open('../../tests/dump.json', 'r') as file:
    data = json.load(file)

df = pd.DataFrame(data)
# print(df.iloc[0])

# walk_km = df.loc[df["type"] == "Walk", "distance"].sum()/1000
# run_km = df.loc[df["type"] == "Run", "distance"].sum()/1000
# print(walk_km, run_km)

# type_km = (df.groupby("type")["distance"].sum()/1000).sort_values(ascending=False)
# print(type_km)

weight_train = df.loc[df["type"] == "WeightTraining"]
print(weight_train.iloc[0])