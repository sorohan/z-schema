"use strict";

module.exports = {
    description: "Issue #56 - unresolvable reference due to hash sign",
    tests: [
        {
            description: "should pass validation #1",
            schema: [
                {
                    id: "schemaA#",
                    type: "string"
                },
                {
                    id: "schemaB#",
                    properties: {
                        a: {
                            "$ref": "schemaA#"
                        }
                    }
                }
            ],
            validateSchemaOnly: true,
            valid: true
        },
        {
            description: "should pass validation #1",
            schema: [
                {
                    id: "http://virtual/schemaA#",
                    type: "string"
                },
                {
                    id: "http://virtual/schemaB#",
                    properties: {
                        a: {
                            "$ref": "schemaA#"
                        }
                    }
                }
            ],
            validateSchemaOnly: true,
            valid: true
        }
    ]
};