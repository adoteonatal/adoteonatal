define({ "api": [
  {
    "type": "post",
    "url": "/v1/auth/",
    "title": "Authenticate user",
    "version": "1.0.0",
    "name": "AuthToken",
    "group": "Auth",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Authenticates an user.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST http://localhost:3000/v1/auth \\\n -H 'content-type: application/x-www-form-urlencoded' \\\n -d 'username=teste&password=123'",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token.</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1/auth.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/auth/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/day-cares/",
    "title": "Create day care",
    "version": "1.0.0",
    "name": "CreateDayCare",
    "group": "DayCare",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Creates a new day care.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST http://localhost:3000/v1/user -d name=myenv",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>DayCare name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>DayCare id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>DayCare name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creation_date",
            "description": "<p>DayCare creation date.</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1/dayCare.js",
    "groupTitle": "DayCare",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/day-cares/"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/day-cares/:id",
    "title": "Delete day care",
    "version": "1.0.0",
    "name": "DeleteDayCare",
    "group": "DayCare",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Deletes an day care.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>DayCare id.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X DELETE http://localhost:3000/v1/day-cares/12345",
        "type": "json"
      }
    ],
    "filename": "src/controllers/v1/dayCare.js",
    "groupTitle": "DayCare",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/day-cares/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/day-cares/:id",
    "title": "Find day care by id",
    "version": "1.0.0",
    "name": "GetDayCare",
    "group": "DayCare",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Finds an day care by its id.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET http://localhost:3000/v1/day-cares/597168b5f780cc3a48cf6215",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>DayCare name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>DayCare id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>DayCare name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creation_date",
            "description": "<p>DayCare creation date.</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1/dayCare.js",
    "groupTitle": "DayCare",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/day-cares/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/day-care/",
    "title": "List day cares",
    "version": "1.0.0",
    "name": "ListDayCares",
    "group": "DayCare",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Lists all day cares.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/v1/day-cares",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>Array of day cares.</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1/dayCare.js",
    "groupTitle": "DayCare",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/day-care/"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/day-cares/:id",
    "title": "Update day care",
    "version": "1.0.0",
    "name": "UpdateDayCare",
    "group": "DayCare",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Updates an day care.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>DayCare name.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X PUT http://localhost:3000/v1/day-cares/12345 -d myvar=myvalue",
        "type": "json"
      }
    ],
    "filename": "src/controllers/v1/dayCare.js",
    "groupTitle": "DayCare",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/day-cares/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/",
    "title": "Health check",
    "version": "1.0.0",
    "name": "HealthCheck",
    "group": "Health",
    "permission": [
      {
        "name": "any"
      }
    ],
    "description": "<p>Verify if the API server is running.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/",
        "type": "json"
      }
    ],
    "filename": "src/controllers/healthyCheck.js",
    "groupTitle": "Health",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/users/",
    "title": "Create user",
    "version": "1.0.0",
    "name": "CreateUser",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Creates a new user.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X POST http://localhost:3000/v1/user -d name=myenv",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isAdmin",
            "description": "<p>User is admin.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isAdmin",
            "description": "<p>User is admin.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creation_date",
            "description": "<p>User creation date.</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users/"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/users/:id",
    "title": "Delete user",
    "version": "1.0.0",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Deletes an user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User id.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X DELETE http://localhost:3000/v1/users/12345",
        "type": "json"
      }
    ],
    "filename": "src/controllers/v1/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/users/:id",
    "title": "Find user by id",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Finds an user by its id.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X GET http://localhost:3000/v1/users/597168b5f780cc3a48cf6215",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isAdmin",
            "description": "<p>User is admin.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isAdmin",
            "description": "<p>User is admin.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creation_date",
            "description": "<p>User creation date.</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/users/",
    "title": "List users",
    "version": "1.0.0",
    "name": "ListUsers",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Lists all users.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3000/v1/user",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>Array of users.</p>"
          }
        ]
      }
    },
    "filename": "src/controllers/v1/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users/"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/users/:id",
    "title": "Update user",
    "version": "1.0.0",
    "name": "UpdateUser",
    "group": "User",
    "permission": [
      {
        "name": "user"
      }
    ],
    "description": "<p>Updates an user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isAdmin",
            "description": "<p>User is admin.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X PUT http://localhost:3000/v1/users/12345 -d myvar=myvalue",
        "type": "json"
      }
    ],
    "filename": "src/controllers/v1/user.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/v1/users/:id"
      }
    ]
  }
] });
