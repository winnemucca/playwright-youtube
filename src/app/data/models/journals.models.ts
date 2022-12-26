export interface JournalsResponse {
    message: {
        "items-per-page": number,
        "query": {
            "start-index": number,
            "search-terms": "string"
        },
        "total-results": number,
        "items": [
            {
                "last-status-check-time": 0,
                "counts": {
                    "total-dois": 0,
                    "current-dois": 0,
                    "backfile-dois": 0
                },
                "breakdowns": {
                    "dois-by-issued-year": [
                        [
                            0
                        ]
                    ]
                },
                "publisher": "string",
                "coverage": {
                    "affiliations-current": 0,
                    "similarity-checking-current": 0,
                    "descriptions-current": 0,
                    "ror-ids-current": 0,
                    "references-backfie": 0,
                    "funders-backfile": 0,
                    "licenses-backfile": 0,
                    "funders-current": 0,
                    "affiliations-backfile": 0,
                    "resource-links-backfile": 0,
                    "orcids-backfile": 0,
                    "update-policies-current": 0,
                    "ror-ids-backfile": 0,
                    "orcids-current": 0,
                    "similarity-checking-backfile": 0,
                    "descriptions-backfile": 0,
                    "award-numbers-backfile": 0,
                    "update-policies-backfile": 0,
                    "licenses-current": 0,
                    "award-numbers-current": 0,
                    "abstracts-backfile": 0,
                    "resource-links-current": 0,
                    "abstracts-current": 0,
                    "references-current": 0
                },
                "title": "string",
                "subjects": [
                    "string"
                ],
                "coverage-type": {
                    "all": {
                        "last-status-check-time": 0,
                        "affiliations": 0,
                        "abstracts": 0,
                        "orcids": 0,
                        "licenses": 0,
                        "references": 0,
                        "funders": 0,
                        "similarity-checking": 0,
                        "award-numbers": 0,
                        "ror-ids": 0,
                        "update-policies": 0,
                        "resource-links": 0,
                        "descriptions": 0
                    },
                    "current": {
                        "last-status-check-time": 0,
                        "affiliations": 0,
                        "abstracts": 0,
                        "orcids": 0,
                        "licenses": 0,
                        "references": 0,
                        "funders": 0,
                        "similarity-checking": 0,
                        "award-numbers": 0,
                        "ror-ids": 0,
                        "update-policies": 0,
                        "resource-links": 0,
                        "descriptions": 0
                    },
                    "backfile": {
                        "last-status-check-time": 0,
                        "affiliations": 0,
                        "abstracts": 0,
                        "orcids": 0,
                        "licenses": 0,
                        "references": 0,
                        "funders": 0,
                        "similarity-checking": 0,
                        "award-numbers": 0,
                        "ror-ids": 0,
                        "update-policies": 0,
                        "resource-links": 0,
                        "descriptions": 0
                    }
                },
                "flags": {
                    "deposits-abstracts-current": true,
                    "deposits-orcids-current": true,
                    "deposits": true,
                    "deposits-affiliations-backfile": true,
                    "deposits-update-policies-backfile": true,
                    "deposits-award-numbers-current": true,
                    "deposits-resource-links-current": true,
                    "deposits-ror-ids-current": true,
                    "deposits-articles": true,
                    "deposits-affiliations-current": true,
                    "deposits-funders-current": true,
                    "deposits-references-backfile": true,
                    "deposits-ror-ids-backfile": true,
                    "deposits-abstracts-backfile": true,
                    "deposits-licenses-backfile": true,
                    "deposits-award-numbers-backfile": true,
                    "deposits-descriptions-current": true,
                    "deposits-references-current": true,
                    "deposits-resource-links-backfile": true,
                    "deposits-descriptions-backfile": true,
                    "deposits-orcids-backfile": true,
                    "deposits-funders-backfile": true,
                    "deposits-update-policies-current": true,
                    "deposits-licenses-current": true
                },
                "ISSN": [
                    "string"
                ],
                "issn-type": {
                    "value": "string",
                    "type": "string"
                }
            }
        ]
    }
}

export interface Journals {
    items: Array<any>
}

export interface Items {
    publisher: string,
    title: string;
    subjects: string;
    ISSN: string;
    flags: any;
}