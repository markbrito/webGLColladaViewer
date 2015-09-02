jsonHash[divHTML.id].c=[
    {
        "e": "DIV",
        "id": "divMain",
        "style": {
            "position": "fixed",
            "top": "0%",
            "left": "0%",
            "width": "100%",
            "height": "100%",
            "background-color": "grey",
            "color": "gold",
            "text-align": "center",
            "overflow": "auto"
        },
        "c": [
            {
                "e": "FORM",
                "id": "formWorld",
                "contenteditable": "false",
                "innerHTML": "",
                "style": {
                    "text-align": "center"
                },
                "c": [
                    {
                        "e": "SPAN",
                        "id": "spanTitle",
                        "innerHTML": "WebGL World Builder",
                        "style": {
                            "font-size": "36px",
                            "color": "gold",
                            "background-color": "transparent",
                            "width": "100%",
                            "height": "auto"
                        },
                        "c": []
                    },
                    {
                        "e": "DIV",
                        "id": "divCredentials",
                        "style": {
                            "position": "fixed",
                            "top": "0%",
                            "left": "0%",
                            "width": "auto",
                            "height": "auto"
                        },
                        "c": [
                            {
                                "e": "DIV",
                                "id": "divEmail",
                                "contenteditable": "false",
                                "innerHTML": "Email%3A",
                                "style": {},
                                "c": [
                                    {
                                        "e": "INPUT",
                                        "id": "email",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {},
                                        "type": "text",
                                        "name": "email",
                                        "value": "mark.brito@gmail.com"
                                    }
                                ]
                            },
                            {
                                "e": "DIV",
                                "id": "divSecret",
                                "contenteditable": "false",
                                "innerHTML": "Secret%3A",
                                "style": {},
                                "c": [
                                    {
                                        "e": "INPUT",
                                        "id": "secret",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {},
                                        "type": "password",
                                        "name": "secret"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "e": "HR",
                        "id": "HRTop",
                        "contenteditable": "false",
                        "innerHTML": "",
                        "style": {}
                    },
                    {
                        "e": "SPAN",
                        "id": "spanLeft",
                        "contenteditable": "false",
                        "innerHTML": "",
                        "style": {
                            "width": "49%",
                            "float": "left",
                            "position": "relative",
                            "line-height": "1.5"
                        },
                        "c": [
                            {
                                "e": "SPAN",
                                "id": "spanLeftAlign",
                                "contenteditable": "false",
                                "innerHTML": "",
                                "style": {
                                    "width": "49%",
                                    "float": "left",
                                    "position": "relative",
                                    "line-height": "1.36"
                                },
                                "c": [
                                    {
                                        "e": "DIV",
                                        "id": "divWorldName",
                                        "contenteditable": "false",
                                        "innerHTML": "World%20Name%3A",
                                        "style": {
                                            "text-align": "right"
                                        },
                                        "c": []
                                    },
                                    {
                                        "e": "DIV",
                                        "id": "divBackgroundColor",
                                        "contenteditable": "false",
                                        "innerHTML": "Background%20Color%3A",
                                        "style": {
                                            "text-align": "right"
                                        }
                                    },
                                    {
                                        "e": "DIV",
                                        "id": "divForegroundColor",
                                        "contenteditable": "false",
                                        "innerHTML": "Foreground%20Color%3A",
                                        "style": {
                                            "text-align": "right"
                                        }
                                    },
                                    {
                                        "e": "DIV",
                                        "id": "divWorldScale",
                                        "contenteditable": "false",
                                        "innerHTML": "World%20Scale%3A",
                                        "style": {
                                            "text-align": "right"
                                        }
                                    },
                                    {
                                        "e": "DIV",
                                        "id": "divWalkTimeStep",
                                        "contenteditable": "false",
                                        "innerHTML": "Walk%20Time%20Step:",
                                        "style": {
                                            "text-align": "right"
                                        }
                                    },
                                    {
                                        "e": "DIV",
                                        "id": "divRotateTimeStep",
                                        "contenteditable": "false",
                                        "innerHTML": "Rotate%20Time%20Step:",
                                        "style": {
                                            "text-align": "right"
                                        }
                                    }
                                ]
                            },
                            {
                                "e": "SPAN",
                                "id": "spanRightAlign",
                                "contenteditable": "false",
                                "innerHTML": "",
                                "style": {
                                    "width": "49%",
                                    "float": "left",
                                    "clear": "right",
                                    "line-height": "2"
                                },
                                "c": [
                                    {
                                        "e": "INPUT",
                                        "id": "world",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {
                                            "display": "block"
                                        },
                                        "type": "text",
                                        "c": [],
                                        "name": "world",
                                        "value": "Monster Park"
                                    },
                                    {
                                        "e": "INPUT",
                                        "id": "bgcolor",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {
                                            "display": "block"
                                        },
                                        "type": "text",
                                        "name": "bgcolor",
                                        "value": "#ff8080"
                                    },
                                    {
                                        "e": "INPUT",
                                        "id": "fgcolor",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {
                                            "display": "block"
                                        },
                                        "type": "text",
                                        "name": "fgcolor",
                                        "value": "#dede00"
                                    },
                                    {
                                        "e": "INPUT",
                                        "id": "scale",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {
                                            "display": "block"
                                        },
                                        "name": "worldScale",
                                        "value": "0.004",
                                        "type": "text"
                                    },
                                    {
                                        "e": "INPUT",
                                        "id": "walkTimeStep",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {
                                            "display": "block"
                                        },
                                        "name": "walkTimeStep",
                                        "value": "0.008",
                                        "type": "text"
                                    },
                                    {
                                        "e": "INPUT",
                                        "id": "rotateTimeStep",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {
                                            "display": "block"
                                        },
                                        "name": "rotateTimeStep",
                                        "value": "88.0",
                                        "type": "text"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "e": "SPAN",
                        "id": "spanLeft",
                        "contenteditable": "false",
                        "innerHTML": "",
                        "style": {
                            "width": "33%",
                            "float": "left",
                            "position": "relative",
                            "line-height": "1.5"
                        },
                        "c": [
                            {
                                "e": "SPAN",
                                "id": "spanLeftAlign2",
                                "contenteditable": "false",
                                "innerHTML": "",
                                "style": {
                                    "width": "49%",
                                    "float": "left",
                                    "position": "relative",
                                    "line-height": "1.37"
                                },
                                "c": [
                                    {
                                        "e": "DIV",
                                        "id": "divCameraViewAngle",
                                        "contenteditable": "false",
                                        "innerHTML": "Camera%20View%20Angle:",
                                        "style": {
                                            "text-align": "right"
                                        },
                                        "c": []
                                    },
                                    {
                                        "e": "DIV",
                                        "id": "divCameraNearPoint",
                                        "contenteditable": "false",
                                        "innerHTML": "Camera%20Near%20Point:",
                                        "style": {
                                            "text-align": "right"
                                        }
                                    },
                                    {
                                        "e": "DIV",
                                        "id": "divCameraFarPoint",
                                        "contenteditable": "false",
                                        "innerHTML": "Camera%20Far%20Point:",
                                        "style": {
                                            "text-align": "right"
                                        }
                                    },
                                    {
                                        "e": "DIV",
                                        "id": "divCameraPositionXYZ",
                                        "contenteditable": "false",
                                        "innerHTML": "Camera%20Position%20XYZ:",
                                        "style": {
                                            "text-align": "right"
                                        }
                                    },
                                    {
                                        "e": "DIV",
                                        "id": "divTransformControlsSize",
                                        "contenteditable": "false",
                                        "innerHTML": "Transform%20Controls%20Size%3A",
                                        "style": {
                                            "text-align": "right"
                                        }
                                    }
                                ]
                            },
                            {
                                "e": "SPAN",
                                "id": "spanRight2",
                                "contenteditable": "false",
                                "innerHTML": "",
                                "style": {
                                    "width": "49%",
                                    "float": "left",
                                    "clear": "right",
                                    "line-height": "2"
                                },
                                "c": [
                                    {
                                        "e": "INPUT",
                                        "id": "cameraViewAngle",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {
                                            "display": "block"
                                        },
                                        "type": "text",
                                        "c": [],
                                        "name": "cameraViewAngle",
                                        "value": "45",
                                        "clear": "both"
                                    },
                                    {
                                        "e": "INPUT",
                                        "id": "cameraNearPoint",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {
                                            "display": "block"
                                        },
                                        "type": "text",
                                        "name": "cameraNearPoint",
                                        "value": "0.025"
                                    },
                                    {
                                        "e": "INPUT",
                                        "id": "cameraFarPoint",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {
                                            "display": "block"
                                        },
                                        "type": "text",
                                        "name": "cameraFarPoint",
                                        "value": "100000"
                                    },
                                    {
                                        "e": "INPUT",
                                        "id": "cameraPositionX",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {
                                            "display": "inline",
                                            "width": "55px",
                                            "float": "left"
                                        },
                                        "name": "cameraPositionX",
                                        "value": "0",
                                        "type": "text",
                                        "float": "left"
                                    },
                                    {
                                        "e": "INPUT",
                                        "id": "cameraPositionY",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {
                                            "display": "inline",
                                            "width": "55px",
                                            "float": "left"
                                        },
                                        "name": "cameraPositionY",
                                        "value": "0.5",
                                        "type": "text",
                                        "width": "",
                                        "size": "",
                                        "float": "left"
                                    },
                                    {
                                        "e": "INPUT",
                                        "id": "cameraPositionZ",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {
                                            "display": "inline",
                                            "float": "left",
                                            "width": "55px"
                                        },
                                        "name": "cameraPositionZ",
                                        "value": "2",
                                        "type": "text",
                                        "width": "",
                                        "size": ""
                                    },
                                    {
                                        "e": "INPUT",
                                        "id": "transformControlsSize",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {
                                            "display": "block"
                                        },
                                        "type": "text",
                                        "value": "1.0",
                                        "name": "transformControlsSize"
                                    },
                                    {
                                        "e": "SPAN",
                                        "id": "span2",
                                        "contenteditable": "false",
                                        "innerHTML": "Rotate World X:",
                                        "c": [],
                                        "dropzone": ""
                                    },
                                    {
                                        "e": "INPUT",
                                        "id": "mouseRotateWorldX",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {},
                                        "c": [],
                                        "value": "true",
                                        "type": "checkbox",
                                        "name": "mouseRotateWorldX",
                                        "checked": ""
                                    },
                                    {
                                        "e": "SPAN",
                                        "id": "span3",
                                        "contenteditable": "false",
                                        "innerHTML": "<br>Rotate World Y:",
                                        "c": [],
                                        "dropzone": ""
                                    },
                                    {
                                        "e": "INPUT",
                                        "id": "mouseWorldRotateY",
                                        "name": "mouseRotateWorldY",
                                        "value": "true",
                                        "type": "checkbox",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {
                                            "display": "inlinr"
                                        },
                                        "checked": "true"
                                    },
                                    {
                                        "e": "SPAN",
                                        "id": "span4",
                                        "contenteditable": "false",
                                        "innerHTML": "<br>Mouse Walk Foward:",
                                        "c": [],
                                        "dropzone": ""
                                    },
                                    {
                                        "e": "INPUT",
                                        "id": "mouseWalkForward",
                                        "name": "mouseWalkForward",
                                        "value": "true",
                                        "type": "checkbox",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {},
                                        "checked": "true"
                                    },
                                    {
                                        "e": "SPAN",
                                        "id": "span5",
                                        "contenteditable": "false",
                                        "innerHTML": "<br>Mouse Walk Backward:",
                                        "c": [],
                                        "dropzone": ""
                                    },
                                    {
                                        "e": "INPUT",
                                        "id": "mouseWalkBackward",
                                        "name": "mouseWalkBackward",
                                        "value": "true",
                                        "type": "checkbox",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {},
                                        "checked": "true"
                                    },
                                    {
                                        "e": "SPAN",
                                        "id": "span6",
                                        "contenteditable": "false",
                                        "innerHTML": "<br>Mouse Pan X:",
                                        "c": [],
                                        "dropzone": ""
                                    },
                                    {
                                        "e": "INPUT",
                                        "id": "mousePanX",
                                        "name": "mousePanX",
                                        "value": "true",
                                        "type": "checkbox",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {},
                                        "checked": "true"
                                    },
                                    {
                                        "e": "SPAN",
                                        "id": "span7",
                                        "contenteditable": "false",
                                        "innerHTML": "<br>Mouse Pan Y:",
                                        "c": [],
                                        "dropzone": ""
                                    },
                                    {
                                        "e": "INPUT",
                                        "id": "mousePanY",
                                        "name": "mousePanY",
                                        "value": "true",
                                        "type": "checkbox",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {}
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "e": "SPAN",
                        "id": "spanBottom",
                        "contenteditable": "false",
                        "innerHTML": "",
                        "style": {
                            "width": "100%",
                            "clear": "both",
                            "display": "block",
                            "margin": "",
                            "padding": "5px"
                        },
                        "c": [
                            {
                                "e": "DIV",
                                "id": "divControlsAndModels",
                                "style": {
                                    "position": "relative",
                                    "top": "0px",
                                    "left": "0px",
                                    "width": "100%",
                                    "height": "auto",
                                    "vertical-align": "middle",
                                    "padding-top": "15px"
                                },
                                "c": [
                                    {
                                        "e": "SPAN",
                                        "id": "spanModels",
                                        "innerHTML": "Models:",
                                        "style": {}
                                    },
                                    {
                                        "e": "SELECT",
                                        "id": "selectModels",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {},
                                        "c": [
                                            {
                                                "e": "OPTION",
                                                "id": "OPTIONModel1",
                                                "contenteditable": "false",
                                                "innerHTML": "Old%20West",
                                                "style": {},
                                                "value": "models/west.dae"
                                            },
                                            {
                                                "e": "OPTION",
                                                "id": "OPTIONModel2",
                                                "contenteditable": "false",
                                                "innerHTML": "Football%20Field",
                                                "style": {},
                                                "value": "models/football.dae",
                                                "selected": "true"
                                            },
                                            {
                                                "e": "OPTION",
                                                "id": "OPTIONModel3",
                                                "value": "models/park.dae",
                                                "contenteditable": "false",
                                                "innerHTML": "Park",
                                                "style": {}
                                            },
                                            {
                                                "e": "OPTION",
                                                "id": "OPTIONModel4",
                                                "contenteditable": "false",
                                                "innerHTML": "Monster",
                                                "style": {},
                                                "value": "models/monster/monster.dae"
                                            }
                                        ],
                                        "multiple": "true",
                                        "name": "models"
                                    },
                                    {
                                        "e": "SPAN",
                                        "id": "spanControls",
                                        "innerHTML": "Controls:",
                                        "style": {
                                            "padding-left": "25px"
                                        }
                                    },
                                    {
                                        "e": "SELECT",
                                        "id": "selectControls",
                                        "contenteditable": "false",
                                        "innerHTML": "",
                                        "style": {},
                                        "c": [
                                            {
                                                "e": "OPTION",
                                                "id": "OPTIONControl1",
                                                "contenteditable": "false",
                                                "innerHTML": "49ers%20Helmet%20Translate",
                                                "style": {},
                                                "value": "football_San_Francisco_49ers_Football_helmet+translate",
                                                "selected": "true"
                                            },
                                            {
                                                "e": "OPTION",
                                                "id": "OPTIONControl2",
                                                "contenteditable": "false",
                                                "innerHTML": "49ers%20Helmet%20Scale",
                                                "style": {},
                                                "value": "football_San_Francisco_49ers_Football_helmet+scale",
                                                "selected": "true"
                                            },
                                            {
                                                "e": "OPTION",
                                                "id": "OPTIONControl3",
                                                "contenteditable": "false",
                                                "innerHTML": "49ers%20Helmet%20Rotate",
                                                "style": {},
                                                "value": "football_San_Francisco_49ers_Football_helmet+rotate",
                                                "selected": "true"
                                            },
                                            {
                                                "e": "OPTION",
                                                "id": "OPTIONControl4",
                                                "contenteditable": "false",
                                                "innerHTML": "Monster%20Rotate",
                                                "style": {},
                                                "value": "monster_monster+rotate"
                                            },
                                            {
                                                "e": "OPTION",
                                                "id": "OPTIONControl5",
                                                "contenteditable": "false",
                                                "innerHTML": "Monster%20Translate",
                                                "style": {},
                                                "value": "monster_monster+translate"
                                            },
                                            {
                                                "e": "OPTION",
                                                "id": "OPTIONControl6",
                                                "contenteditable": "false",
                                                "innerHTML": "Monster%20Scale",
                                                "style": {},
                                                "value": "monster_monster+scale"
                                            }
                                        ],
                                        "multiple": "true",
                                        "name": "controls"
                                    }
                                ]
                            },
                            {
                                "e": "INPUT",
                                "id": "build",
                                "contenteditable": "false",
                                "innerHTML": "",
                                "style": {
                                    "display": "inline",
                                    "clear": "both",
                                    "margin-top": "25px"
                                },
                                "type": "submit",
                                "value": "Build World"
                            }
                        ]
                    }
                ],
                "target": "_blank",
                "method": "GET",
                "action": "./examples/loadDae.html",
                "enctype": "application/x-www-form-urlencoded"
            }
        ]
    }
]