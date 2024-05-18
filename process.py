import json
import requests


def process_needs(needs):
  data = []
  i = 0
  for need in needs:
    i += 1
    if i % 10 == 0:
      print(i)
    nf = {}
    nf["id"] = need["id"]
    nf["foodbank"] = need["foodbank"]["name"]
    nf["needs"] = need["needs"]
    nf["excess"] = need["excess"]

    url = need["foodbank"]["urls"]["self"]
    bankData = requests.get(url).json()
    #nf["phone"] = need["foodbank"]["urls"]["self"]
    #nf["emails"] = need["foodbank"]["urls"]["self"]
    #nf["address"] = need["foodbank"]["urls"]["self"]
    nf["phone"] = bankData["phone"]
    nf["email"] = bankData["email"]
    nf["address"] = bankData["address"]
    nf["url"] = bankData["urls"]["homepage"]
    data.append(nf)
  return data


needs = json.loads(open('needs.json', "r").read())
print(len(needs))
data = process_needs(needs)
print(data)
json.dump(data, open("data.json", "w"), indent=2)
