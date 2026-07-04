import pandas as pd
import json

with open('../../tests/dump.json', 'r') as file:
    data = json.load(file)

df = pd.DataFrame(data)
print(df.iloc[0])