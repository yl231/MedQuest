from pytrials.client import ClinicalTrials
import json

ct = ClinicalTrials()
# res = ct.get_full_studies(search_expr="Coronavirus+COVID", max_studies=1)
res = ct.get_study_fields(
    search_expr="Coronavirus+COVID OR Chickenpox ",
    fields=["NCTId", "Condition", "BriefTitle", "OverallStatus", "LocationCountry"],
    max_studies=10,
    fmt="json",
)

# Pretty-print the dictionary
formatted_json = json.dumps(res, indent=4)

# Print the nicely formatted JSON
print(formatted_json)