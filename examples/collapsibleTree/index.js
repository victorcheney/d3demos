const margin = {
    top: 10,
    right: 120,
    bottom: 10,
    left: 40
};

let width = 600;

let dx = 10;
let dy = width / 6;

let data = {
    "owner": "administrator",
    "comments": null,
    "manager": [],
    "dependsOn": [
        "山东神州姜窖农业科技有限公司"
    ],
    "icon": "iconfont icon-fmlogo",
    "type": {
        "typeId": "AGR_COMPANY",
        "typeDescription": "公司"
    },
    "parentId": null,
    "statusId": "PARTY_ENABLED",
    "children": [{
            "owner": "administrator",
            "comments": "北凌家院有机农场",
            "statusId": "PARTY_ENABLED",
            "manager": [],
            "dependsOn": [
                "北凌家院有机农场"
            ],
            "children": [{
                    "owner": "administrator",
                    "devStatus": 0,
                    "comments": "北凌家院南环境控制中心",
                    "manager": [],
                    "dependsOn": [
                        "北凌家院北环境控制中心"
                    ],
                    "ip": "www.fmbj.com.cn",
                    "onlineStatus": 0,
                    "icon": "iconfont icon-fanmihezi",
                    "gps": {
                        "latitude": null,
                        "longitude": null
                    },
                    "type": {
                        "typeId": "09",
                        "typeDescription": "协调器设备"
                    },
                    "uuid": "wf-szjj-003",
                    "parentId": "10117",
                    "statusId": null,
                    "children": [{
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-北水泵"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-003",
                            "parentId": "5B0165944FC66D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "50",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-fanmi-kaiguan",
                                    "terminalId": "10936",
                                    "type": {
                                        "typeId": "",
                                        "typeDescription": "开关类设备"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "4801656FB0B4B3",
                                    "lastCollectDate": null,
                                    "deviceNum": "22",
                                    "partyTypeId": "",
                                    "shortAddr": "d068d701",
                                    "host": {
                                        "": [
                                            "4801656FB0B4B322"
                                        ]
                                    },
                                    "id": "4801656FB0B4B322",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-水泵"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "50",
                                        "开关类设备"
                                    ],
                                    "parentId": "4801656FB0B4B3",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-水泵",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "开关",
                                    "sensorTypeId": "50"
                                },
                                {
                                    "deviceTypeId": "50",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-fanmi-kaiguan",
                                    "terminalId": "10935",
                                    "type": {
                                        "typeId": "",
                                        "typeDescription": "开关类设备"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "4801656FB0B4B3",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "",
                                    "shortAddr": "d068d701",
                                    "host": {
                                        "": [
                                            "4801656FB0B4B321"
                                        ]
                                    },
                                    "id": "4801656FB0B4B321",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-水泵"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "50",
                                        "开关类设备"
                                    ],
                                    "parentId": "4801656FB0B4B3",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-水泵",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "开关",
                                    "sensorTypeId": "50"
                                }
                            ],
                            "shortAddr": "d068d701",
                            "name": "lu17-北水泵",
                            "host": {
                                "07": [
                                    "4801656FB0B4B3"
                                ]
                            },
                            "location": "wf-szjj-003",
                            "id": "4801656FB0B4B3"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-北007"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-003",
                            "parentId": "5B0165944FC66D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10947",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "EC016566CD4122",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "46939501",
                                    "host": {
                                        "SENSOR": [
                                            "EC016566CD412221"
                                        ]
                                    },
                                    "id": "EC016566CD412221",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu7-北007-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "EC016566CD4122",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu7-北007-开关",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10743",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "EC016566CD4122",
                                    "lastCollectDate": 1537258757109,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "46939501",
                                    "host": {
                                        "SENSOR": [
                                            "EC016566CD412208"
                                        ]
                                    },
                                    "id": "EC016566CD412208",
                                    "owner": "administrator",
                                    "comments": "46939501",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北007-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "EC016566CD4122",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-北007-土壤温度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10742",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "EC016566CD4122",
                                    "lastCollectDate": 1537258757109,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "46939501",
                                    "host": {
                                        "SENSOR": [
                                            "EC016566CD412204"
                                        ]
                                    },
                                    "id": "EC016566CD412204",
                                    "owner": "administrator",
                                    "comments": "46939501",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北007-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "EC016566CD4122",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-北007-土壤水分",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10741",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "EC016566CD4122",
                                    "lastCollectDate": 1537258757108,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "46939501",
                                    "host": {
                                        "SENSOR": [
                                            "EC016566CD412202"
                                        ]
                                    },
                                    "id": "EC016566CD412202",
                                    "owner": "administrator",
                                    "comments": "46939501",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北007-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "EC016566CD4122",
                                    "recentData": "",
                                    "statusId": "44",
                                    "name": "lu17-北007-空气温湿度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10740",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "EC016566CD4122",
                                    "lastCollectDate": 1537258757108,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "46939501",
                                    "host": {
                                        "SENSOR": [
                                            "EC016566CD412201"
                                        ]
                                    },
                                    "id": "EC016566CD412201",
                                    "owner": "administrator",
                                    "comments": "46939501",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北007-开关"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "EC016566CD4122",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-北007-开关",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                }
                            ],
                            "shortAddr": "46939501",
                            "name": "lu17-北007",
                            "host": {
                                "07": [
                                    "EC016566CD4122"
                                ]
                            },
                            "location": "wf-szjj-003",
                            "id": "EC016566CD4122"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-北011"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-003",
                            "parentId": "5B0165944FC66D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "32",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu",
                                    "terminalId": "10963",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "D6016597AD252B",
                                    "lastCollectDate": null,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "8e7ee800",
                                    "host": {
                                        "SENSOR": [
                                            "D6016597AD252B02"
                                        ]
                                    },
                                    "id": "D6016597AD252B02",
                                    "owner": "administrator",
                                    "comments": "8e7ee800",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北011-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "120",
                                            "seqId": 1,
                                            "minRange": "-40"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "32",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "D6016597AD252B",
                                    "recentData": null,
                                    "statusId": "64",
                                    "name": "lu17-北011-土壤水分",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "2017-百叶窗空气温湿度一体传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10951",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "D6016597AD252B",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "8e7ee800",
                                    "host": {
                                        "SENSOR": [
                                            "D6016597AD252B21"
                                        ]
                                    },
                                    "id": "D6016597AD252B21",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北011-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "D6016597AD252B",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-北011-开关",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10781",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "D6016597AD252B",
                                    "lastCollectDate": 1537259046322,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "8e7ee800",
                                    "host": {
                                        "SENSOR": [
                                            "D6016597AD252B08"
                                        ]
                                    },
                                    "id": "D6016597AD252B08",
                                    "owner": "administrator",
                                    "comments": "8e7ee800",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北011-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "D6016597AD252B",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-北011-土壤温度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10780",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "D6016597AD252B",
                                    "lastCollectDate": 1537496262680,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "8e7ee800",
                                    "host": {
                                        "SENSOR": [
                                            "D6016597AD252B04"
                                        ]
                                    },
                                    "id": "D6016597AD252B04",
                                    "owner": "administrator",
                                    "comments": "8e7ee800",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北011-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "D6016597AD252B",
                                    "recentData": "24.2,82.3",
                                    "statusId": "64",
                                    "name": "lu17-北011-空气温湿度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10779",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "D6016597AD252B",
                                    "lastCollectDate": 1537497458884,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "8e7ee800",
                                    "host": {
                                        "SENSOR": [
                                            "D6016597AD252B02"
                                        ]
                                    },
                                    "id": "D6016597AD252B02",
                                    "owner": "administrator",
                                    "comments": "8e7ee800",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北011-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "D6016597AD252B",
                                    "recentData": "0",
                                    "statusId": "64",
                                    "name": "lu17-北011-土壤水分",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10778",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "D6016597AD252B",
                                    "lastCollectDate": 1537496242060,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "8e7ee800",
                                    "host": {
                                        "SENSOR": [
                                            "D6016597AD252B01"
                                        ]
                                    },
                                    "id": "D6016597AD252B01",
                                    "owner": "administrator",
                                    "comments": "8e7ee800",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北011-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "D6016597AD252B",
                                    "recentData": "997",
                                    "statusId": "64",
                                    "name": "lu17-北011-二氧化碳",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                }
                            ],
                            "shortAddr": "8e7ee800",
                            "name": "lu17-北011",
                            "host": {
                                "07": [
                                    "D6016597AD252B"
                                ]
                            },
                            "location": "wf-szjj-003",
                            "id": "D6016597AD252B"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-北005"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-003",
                            "parentId": "5B0165944FC66D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10945",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "D0016569FC9DDA",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "119f6100",
                                    "host": {
                                        "SENSOR": [
                                            "D0016569FC9DDA21"
                                        ]
                                    },
                                    "id": "D0016569FC9DDA21",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北005-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "D0016569FC9DDA",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-北005-开关",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10758",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "D0016569FC9DDA",
                                    "lastCollectDate": 1537259222965,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "119f6100",
                                    "host": {
                                        "SENSOR": [
                                            "D0016569FC9DDA08"
                                        ]
                                    },
                                    "id": "D0016569FC9DDA08",
                                    "owner": "administrator",
                                    "comments": "119f6100",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北005-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "D0016569FC9DDA",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-北005-土壤温度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10757",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "D0016569FC9DDA",
                                    "lastCollectDate": 1537490604280,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "119f6100",
                                    "host": {
                                        "SENSOR": [
                                            "D0016569FC9DDA04"
                                        ]
                                    },
                                    "id": "D0016569FC9DDA04",
                                    "owner": "administrator",
                                    "comments": "119f6100",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北005-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "D0016569FC9DDA",
                                    "recentData": "32.8",
                                    "statusId": "64",
                                    "name": "lu17-北005-土壤水分",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10756",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "D0016569FC9DDA",
                                    "lastCollectDate": 1537498018661,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "119f6100",
                                    "host": {
                                        "SENSOR": [
                                            "D0016569FC9DDA02"
                                        ]
                                    },
                                    "id": "D0016569FC9DDA02",
                                    "owner": "administrator",
                                    "comments": "119f6100",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北005-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "D0016569FC9DDA",
                                    "recentData": "1203",
                                    "statusId": "64",
                                    "name": "lu17-北005-二氧化碳",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10755",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "D0016569FC9DDA",
                                    "lastCollectDate": 1537414480681,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "119f6100",
                                    "host": {
                                        "SENSOR": [
                                            "D0016569FC9DDA01"
                                        ]
                                    },
                                    "id": "D0016569FC9DDA01",
                                    "owner": "administrator",
                                    "comments": "119f6100",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北005-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "D0016569FC9DDA",
                                    "recentData": "21.2,99.4",
                                    "statusId": "64",
                                    "name": "lu17-北005-空气温湿度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                }
                            ],
                            "shortAddr": "119f6100",
                            "name": "lu17-北005",
                            "host": {
                                "07": [
                                    "D0016569FC9DDA"
                                ]
                            },
                            "location": "wf-szjj-003",
                            "id": "D0016569FC9DDA"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-北002"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-003",
                            "parentId": "5B0165944FC66D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10933",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "BF01659EE4FE67",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "0483d101",
                                    "host": {
                                        "SENSOR": [
                                            "BF01659EE4FE6721"
                                        ]
                                    },
                                    "id": "BF01659EE4FE6721",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北002-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "BF01659EE4FE67",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-北002-开关",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10821",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "BF01659EE4FE67",
                                    "lastCollectDate": 1537258859655,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "0483d101",
                                    "host": {
                                        "SENSOR": [
                                            "BF01659EE4FE6708"
                                        ]
                                    },
                                    "id": "BF01659EE4FE6708",
                                    "owner": "administrator",
                                    "comments": "0483d101",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北002-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "BF01659EE4FE67",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-北002-土壤温度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10820",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "BF01659EE4FE67",
                                    "lastCollectDate": 1537494995433,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "0483d101",
                                    "host": {
                                        "SENSOR": [
                                            "BF01659EE4FE6704"
                                        ]
                                    },
                                    "id": "BF01659EE4FE6704",
                                    "owner": "administrator",
                                    "comments": "0483d101",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北002-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "BF01659EE4FE67",
                                    "recentData": "23.5,90.6",
                                    "statusId": "64",
                                    "name": "lu17-北002-空气温湿度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10819",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "BF01659EE4FE67",
                                    "lastCollectDate": 1537490748852,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "0483d101",
                                    "host": {
                                        "SENSOR": [
                                            "BF01659EE4FE6702"
                                        ]
                                    },
                                    "id": "BF01659EE4FE6702",
                                    "owner": "administrator",
                                    "comments": "0483d101",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北002-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "BF01659EE4FE67",
                                    "recentData": "33.7",
                                    "statusId": "64",
                                    "name": "lu17-北002-土壤水分",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10818",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "BF01659EE4FE67",
                                    "lastCollectDate": 1537498068462,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "0483d101",
                                    "host": {
                                        "SENSOR": [
                                            "BF01659EE4FE6701"
                                        ]
                                    },
                                    "id": "BF01659EE4FE6701",
                                    "owner": "administrator",
                                    "comments": "0483d101",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北002-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "BF01659EE4FE67",
                                    "recentData": "1562",
                                    "statusId": "64",
                                    "name": "lu17-北002-二氧化碳",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                }
                            ],
                            "shortAddr": "0483d101",
                            "name": "lu17-北002",
                            "host": {
                                "07": [
                                    "BF01659EE4FE67"
                                ]
                            },
                            "location": "wf-szjj-003",
                            "id": "BF01659EE4FE67"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-北009"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-003",
                            "parentId": "5B0165944FC66D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10949",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "80016597B18C5E",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "4793d700",
                                    "host": {
                                        "SENSOR": [
                                            "80016597B18C5E21"
                                        ]
                                    },
                                    "id": "80016597B18C5E21",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北009-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "80016597B18C5E",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-北009-开关",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10783",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "80016597B18C5E",
                                    "lastCollectDate": 1537258680036,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "4793d700",
                                    "host": {
                                        "SENSOR": [
                                            "80016597B18C5E08"
                                        ]
                                    },
                                    "id": "80016597B18C5E08",
                                    "owner": "administrator",
                                    "comments": "4793d700",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北009-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "80016597B18C5E",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-北009-土壤温度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10782",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "80016597B18C5E",
                                    "lastCollectDate": 1537498381472,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "4793d700",
                                    "host": {
                                        "SENSOR": [
                                            "80016597B18C5E04"
                                        ]
                                    },
                                    "id": "80016597B18C5E04",
                                    "owner": "administrator",
                                    "comments": "4793d700",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北009-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "80016597B18C5E",
                                    "recentData": "25.1,79.8",
                                    "statusId": "64",
                                    "name": "lu17-北009-空气温湿度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10777",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "80016597B18C5E",
                                    "lastCollectDate": 1537498371157,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "4793d700",
                                    "host": {
                                        "SENSOR": [
                                            "80016597B18C5E02"
                                        ]
                                    },
                                    "id": "80016597B18C5E02",
                                    "owner": "administrator",
                                    "comments": "4793d700",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北009-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "80016597B18C5E",
                                    "recentData": "12.3",
                                    "statusId": "64",
                                    "name": "lu17-北009-土壤水分",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10776",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "80016597B18C5E",
                                    "lastCollectDate": 1537498360853,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "4793d700",
                                    "host": {
                                        "SENSOR": [
                                            "80016597B18C5E01"
                                        ]
                                    },
                                    "id": "80016597B18C5E01",
                                    "owner": "administrator",
                                    "comments": "4793d700",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北009-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "80016597B18C5E",
                                    "recentData": "2003",
                                    "statusId": "64",
                                    "name": "lu17-北009-二氧化碳",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                }
                            ],
                            "shortAddr": "4793d700",
                            "name": "lu17-北009",
                            "host": {
                                "07": [
                                    "80016597B18C5E"
                                ]
                            },
                            "location": "wf-szjj-003",
                            "id": "80016597B18C5E"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-北010"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-003",
                            "parentId": "5B0165944FC66D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10950",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "7701656B9BC7D0",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "05836401",
                                    "host": {
                                        "SENSOR": [
                                            "7701656B9BC7D021"
                                        ]
                                    },
                                    "id": "7701656B9BC7D021",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北010-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "7701656B9BC7D0",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-北010-开关",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10938",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "7701656B9BC7D0",
                                    "lastCollectDate": 1537498118578,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "05836401",
                                    "host": {
                                        "SENSOR": [
                                            "7701656B9BC7D002"
                                        ]
                                    },
                                    "id": "7701656B9BC7D002",
                                    "owner": "administrator",
                                    "comments": "05836401",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北010-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "7701656B9BC7D0",
                                    "recentData": "2037",
                                    "statusId": "64",
                                    "name": "lu17-北010-二氧化碳",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10937",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "7701656B9BC7D0",
                                    "lastCollectDate": 1537498108262,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "05836401",
                                    "host": {
                                        "SENSOR": [
                                            "7701656B9BC7D001"
                                        ]
                                    },
                                    "id": "7701656B9BC7D001",
                                    "owner": "administrator",
                                    "comments": "05836401",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北010-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "7701656B9BC7D0",
                                    "recentData": "24.9,77.4",
                                    "statusId": "64",
                                    "name": "lu17-北010-空气温湿度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10733",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "7701656B9BC7D0",
                                    "lastCollectDate": 1537496336795,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "05836401",
                                    "host": {
                                        "SENSOR": [
                                            "7701656B9BC7D008"
                                        ]
                                    },
                                    "id": "7701656B9BC7D008",
                                    "owner": "administrator",
                                    "comments": "05836401",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北010-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "7701656B9BC7D0",
                                    "recentData": "22",
                                    "statusId": "64",
                                    "name": "lu17-北010-土壤温度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10732",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "7701656B9BC7D0",
                                    "lastCollectDate": 1537498128884,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "05836401",
                                    "host": {
                                        "SENSOR": [
                                            "7701656B9BC7D004"
                                        ]
                                    },
                                    "id": "7701656B9BC7D004",
                                    "owner": "administrator",
                                    "comments": "05836401",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北010-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "7701656B9BC7D0",
                                    "recentData": "17.4",
                                    "statusId": "64",
                                    "name": "lu17-北010-土壤水分",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                }
                            ],
                            "shortAddr": "05836401",
                            "name": "lu17-北010",
                            "host": {
                                "07": [
                                    "7701656B9BC7D0"
                                ]
                            },
                            "location": "wf-szjj-003",
                            "id": "7701656B9BC7D0"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-北008"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-003",
                            "parentId": "5B0165944FC66D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10948",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "77016569EAEA32",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "4192c400",
                                    "host": {
                                        "SENSOR": [
                                            "77016569EAEA3221"
                                        ]
                                    },
                                    "id": "77016569EAEA3221",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北008-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "77016569EAEA32",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-北008-开关",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10738",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "77016569EAEA32",
                                    "lastCollectDate": 1537312022160,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "4192c400",
                                    "host": {
                                        "SENSOR": [
                                            "77016569EAEA3208"
                                        ]
                                    },
                                    "id": "77016569EAEA3208",
                                    "owner": "administrator",
                                    "comments": "4192c400",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北008-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "77016569EAEA32",
                                    "recentData": "19.1,99.4",
                                    "statusId": "64",
                                    "name": "lu17-北008-空气温湿度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10737",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "77016569EAEA32",
                                    "lastCollectDate": 1537421883618,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "4192c400",
                                    "host": {
                                        "SENSOR": [
                                            "77016569EAEA3204"
                                        ]
                                    },
                                    "id": "77016569EAEA3204",
                                    "owner": "administrator",
                                    "comments": "4192c400",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北008-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "77016569EAEA32",
                                    "recentData": "1372",
                                    "statusId": "64",
                                    "name": "lu17-北008-二氧化碳",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10736",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "77016569EAEA32",
                                    "lastCollectDate": 1537273640452,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "4192c400",
                                    "host": {
                                        "SENSOR": [
                                            "77016569EAEA3202"
                                        ]
                                    },
                                    "id": "77016569EAEA3202",
                                    "owner": "administrator",
                                    "comments": "4192c400",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北008-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "77016569EAEA32",
                                    "recentData": "23.8",
                                    "statusId": "64",
                                    "name": "lu17-北008-土壤温度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10735",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "77016569EAEA32",
                                    "lastCollectDate": 1537413800779,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "4192c400",
                                    "host": {
                                        "SENSOR": [
                                            "77016569EAEA3201"
                                        ]
                                    },
                                    "id": "77016569EAEA3201",
                                    "owner": "administrator",
                                    "comments": "4192c400",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北008-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "77016569EAEA32",
                                    "recentData": "34.6",
                                    "statusId": "64",
                                    "name": "lu17-北008-土壤水分",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                }
                            ],
                            "shortAddr": "4192c400",
                            "name": "lu17-北008",
                            "host": {
                                "07": [
                                    "77016569EAEA32"
                                ]
                            },
                            "location": "wf-szjj-003",
                            "id": "77016569EAEA32"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": "描述信息",
                            "manager": [],
                            "dependsOn": [
                                "lu17-北006"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-003",
                            "parentId": "5B0165944FC66D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10946",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "62016566421FD8",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "1b55d500",
                                    "host": {
                                        "SENSOR": [
                                            "62016566421FD821"
                                        ]
                                    },
                                    "id": "62016566421FD821",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北006-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "62016566421FD8",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-北006-开关",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10763",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "62016566421FD8",
                                    "lastCollectDate": 1537498005807,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "1b55d500",
                                    "host": {
                                        "SENSOR": [
                                            "62016566421FD808"
                                        ]
                                    },
                                    "id": "62016566421FD808",
                                    "owner": "administrator",
                                    "comments": "1b55d50011",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北006-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "62016566421FD8",
                                    "recentData": "60.5",
                                    "statusId": "64",
                                    "name": "lu17-北006-土壤水分",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10762",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "62016566421FD8",
                                    "lastCollectDate": 1537258623863,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "1b55d500",
                                    "host": {
                                        "SENSOR": [
                                            "62016566421FD804"
                                        ]
                                    },
                                    "id": "62016566421FD804",
                                    "owner": "administrator",
                                    "comments": "1b55d500",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北006-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "62016566421FD8",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-北006-土壤温度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10761",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "62016566421FD8",
                                    "lastCollectDate": 1537497985188,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "1b55d500",
                                    "host": {
                                        "SENSOR": [
                                            "62016566421FD802"
                                        ]
                                    },
                                    "id": "62016566421FD802",
                                    "owner": "administrator",
                                    "comments": "1b55d500",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北006-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "62016566421FD8",
                                    "recentData": "909",
                                    "statusId": "64",
                                    "name": "lu17-北006-二氧化碳",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10760",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "62016566421FD8",
                                    "lastCollectDate": 1537497974876,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "1b55d500",
                                    "host": {
                                        "SENSOR": [
                                            "62016566421FD801"
                                        ]
                                    },
                                    "id": "62016566421FD801",
                                    "owner": "administrator",
                                    "comments": "1b55d50011",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北006-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "62016566421FD8",
                                    "recentData": "25,76.6",
                                    "statusId": "64",
                                    "name": "lu17-北006-空气温湿度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                }
                            ],
                            "shortAddr": "1b55d500",
                            "name": "lu17-北006",
                            "host": {
                                "07": [
                                    "62016566421FD8"
                                ]
                            },
                            "location": "wf-szjj-003",
                            "id": "62016566421FD8"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-北012"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-003",
                            "parentId": "5B0165944FC66D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10952",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "410165A24D598D",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "d944ca01",
                                    "host": {
                                        "SENSOR": [
                                            "410165A24D598D21"
                                        ]
                                    },
                                    "id": "410165A24D598D21",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北012-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "410165A24D598D",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-北012-开关",
                                    "location": null,
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10826",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "410165A24D598D",
                                    "lastCollectDate": 1537498139508,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "d944ca01",
                                    "host": {
                                        "SENSOR": [
                                            "410165A24D598D08"
                                        ]
                                    },
                                    "id": "410165A24D598D08",
                                    "owner": "administrator",
                                    "comments": "d944ca01",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北012-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "410165A24D598D",
                                    "recentData": "30.4",
                                    "statusId": "64",
                                    "name": "lu17-北012-土壤水分",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10825",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "410165A24D598D",
                                    "lastCollectDate": 1537497510475,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "d944ca01",
                                    "host": {
                                        "SENSOR": [
                                            "410165A24D598D04"
                                        ]
                                    },
                                    "id": "410165A24D598D04",
                                    "owner": "administrator",
                                    "comments": "d944ca01",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北012-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "410165A24D598D",
                                    "recentData": "1929",
                                    "statusId": "64",
                                    "name": "lu17-北012-二氧化碳",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10824",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "410165A24D598D",
                                    "lastCollectDate": 1537497500158,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "d944ca01",
                                    "host": {
                                        "SENSOR": [
                                            "410165A24D598D02"
                                        ]
                                    },
                                    "id": "410165A24D598D02",
                                    "owner": "administrator",
                                    "comments": "d944ca01",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北012-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "410165A24D598D",
                                    "recentData": "24.1,80.9",
                                    "statusId": "64",
                                    "name": "lu17-北012-空气温湿度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10823",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "410165A24D598D",
                                    "lastCollectDate": 1537259068277,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "d944ca01",
                                    "host": {
                                        "SENSOR": [
                                            "410165A24D598D01"
                                        ]
                                    },
                                    "id": "410165A24D598D01",
                                    "owner": "administrator",
                                    "comments": "d944ca01",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北012-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "410165A24D598D",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-北012-土壤温度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                }
                            ],
                            "shortAddr": "d944ca01",
                            "name": "lu17-北012",
                            "host": {
                                "07": [
                                    "410165A24D598D"
                                ]
                            },
                            "location": null,
                            "id": "410165A24D598D"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-北003"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-003",
                            "parentId": "5B0165944FC66D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10934",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "3401656AA65EDC",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "d91eff00",
                                    "host": {
                                        "SENSOR": [
                                            "3401656AA65EDC21"
                                        ]
                                    },
                                    "id": "3401656AA65EDC21",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北003-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "3401656AA65EDC",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-北003-开关",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10748",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "3401656AA65EDC",
                                    "lastCollectDate": 1537497482859,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "d91eff00",
                                    "host": {
                                        "SENSOR": [
                                            "3401656AA65EDC08"
                                        ]
                                    },
                                    "id": "3401656AA65EDC08",
                                    "owner": "administrator",
                                    "comments": "d91eff00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北003-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "3401656AA65EDC",
                                    "recentData": "22.3",
                                    "statusId": "64",
                                    "name": "lu17-北003-土壤温度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10747",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "3401656AA65EDC",
                                    "lastCollectDate": 1537498091274,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "d91eff00",
                                    "host": {
                                        "SENSOR": [
                                            "3401656AA65EDC04"
                                        ]
                                    },
                                    "id": "3401656AA65EDC04",
                                    "owner": "administrator",
                                    "comments": "d91eff00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北003-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "3401656AA65EDC",
                                    "recentData": "12",
                                    "statusId": "64",
                                    "name": "lu17-北003-土壤水分",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10746",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "3401656AA65EDC",
                                    "lastCollectDate": 1537259083644,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "d91eff00",
                                    "host": {
                                        "SENSOR": [
                                            "3401656AA65EDC02"
                                        ]
                                    },
                                    "id": "3401656AA65EDC02",
                                    "owner": "administrator",
                                    "comments": "d91eff00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北003-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "3401656AA65EDC",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-北003-空气温湿度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10745",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "3401656AA65EDC",
                                    "lastCollectDate": 1537498070660,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "d91eff00",
                                    "host": {
                                        "SENSOR": [
                                            "3401656AA65EDC01"
                                        ]
                                    },
                                    "id": "3401656AA65EDC01",
                                    "owner": "administrator",
                                    "comments": "d91eff00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北003-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "3401656AA65EDC",
                                    "recentData": "1316",
                                    "statusId": "64",
                                    "name": "lu17-北003-二氧化碳",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                }
                            ],
                            "shortAddr": "d91eff00",
                            "name": "lu17-北003",
                            "host": {
                                "07": [
                                    "3401656AA65EDC"
                                ]
                            },
                            "location": "wf-szjj-003",
                            "id": "3401656AA65EDC"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-北004"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-003",
                            "parentId": "5B0165944FC66D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10944",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "2901656AF6CCDA",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e4fad001",
                                    "host": {
                                        "SENSOR": [
                                            "2901656AF6CCDA21"
                                        ]
                                    },
                                    "id": "2901656AF6CCDA21",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北004-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "2901656AF6CCDA",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-北004-开关",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "31",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-fmsun",
                                    "terminalId": "10804",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "光照传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "2901656AF6CCDA",
                                    "lastCollectDate": 1536120860929,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e4fad001",
                                    "host": {
                                        "SENSOR": [
                                            "2901656AF6CCDA08"
                                        ]
                                    },
                                    "id": "2901656AF6CCDA08",
                                    "owner": "administrator",
                                    "comments": "e4fad001",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北004-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "Lux",
                                        "expression": "(X1 * 256 *256 *256 + X2 * 256 * 256 + X3 *256 + X4)",
                                        "description": "光照",
                                        "typeStep": 1000,
                                        "maxRange": "10000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "31",
                                        "光照传感器"
                                    ],
                                    "parentId": "2901656AF6CCDA",
                                    "recentData": "2260",
                                    "statusId": "64",
                                    "name": "lu17-北004-二氧化碳",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "2017-百叶窗光照传感器",
                                    "sensorTypeId": "00"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10753",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "2901656AF6CCDA",
                                    "lastCollectDate": 1537498013883,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e4fad001",
                                    "host": {
                                        "SENSOR": [
                                            "2901656AF6CCDA08"
                                        ]
                                    },
                                    "id": "2901656AF6CCDA08",
                                    "owner": "administrator",
                                    "comments": "e4fad001",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北004-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "2901656AF6CCDA",
                                    "recentData": "3200",
                                    "statusId": "64",
                                    "name": "lu17-北004-二氧化碳",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10752",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "2901656AF6CCDA",
                                    "lastCollectDate": 1537498003567,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e4fad001",
                                    "host": {
                                        "SENSOR": [
                                            "2901656AF6CCDA04"
                                        ]
                                    },
                                    "id": "2901656AF6CCDA04",
                                    "owner": "administrator",
                                    "comments": "e4fad001",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北004-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "2901656AF6CCDA",
                                    "recentData": "24.3,83.5",
                                    "statusId": "64",
                                    "name": "lu17-北004-空气温湿度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10751",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "2901656AF6CCDA",
                                    "lastCollectDate": 1537497993251,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e4fad001",
                                    "host": {
                                        "SENSOR": [
                                            "2901656AF6CCDA02"
                                        ]
                                    },
                                    "id": "2901656AF6CCDA02",
                                    "owner": "administrator",
                                    "comments": "e4fad001",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北004-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "2901656AF6CCDA",
                                    "recentData": "21.3",
                                    "statusId": "64",
                                    "name": "lu17-北004-土壤温度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10750",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "2901656AF6CCDA",
                                    "lastCollectDate": 1537497982937,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e4fad001",
                                    "host": {
                                        "SENSOR": [
                                            "2901656AF6CCDA01"
                                        ]
                                    },
                                    "id": "2901656AF6CCDA01",
                                    "owner": "administrator",
                                    "comments": "e4fad001",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北004-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "2901656AF6CCDA",
                                    "recentData": "11.6",
                                    "statusId": "64",
                                    "name": "lu17-北004-土壤水分",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                }
                            ],
                            "shortAddr": "e4fad001",
                            "name": "lu17-北004",
                            "host": {
                                "07": [
                                    "2901656AF6CCDA"
                                ]
                            },
                            "location": "wf-szjj-003",
                            "id": "2901656AF6CCDA"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-北013"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-003",
                            "parentId": "5B0165944FC66D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10953",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "270165C0F48F99",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e3fa3d00",
                                    "host": {
                                        "SENSOR": [
                                            "270165C0F48F9921"
                                        ]
                                    },
                                    "id": "270165C0F48F9921",
                                    "owner": "administrator",
                                    "comments": "e3fa3d00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北013-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "270165C0F48F99",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-北013-开关",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10942",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "270165C0F48F99",
                                    "lastCollectDate": 1537498009843,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e3fa3d00",
                                    "host": {
                                        "SENSOR": [
                                            "270165C0F48F9908"
                                        ]
                                    },
                                    "id": "270165C0F48F9908",
                                    "owner": "administrator",
                                    "comments": "e3fa3d00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北013-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "270165C0F48F99",
                                    "recentData": "23",
                                    "statusId": "64",
                                    "name": "lu17-北013-土壤温度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10941",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "270165C0F48F99",
                                    "lastCollectDate": 1537415740238,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e3fa3d00",
                                    "host": {
                                        "SENSOR": [
                                            "270165C0F48F9904"
                                        ]
                                    },
                                    "id": "270165C0F48F9904",
                                    "owner": "administrator",
                                    "comments": "e3fa3d00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北013-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "270165C0F48F99",
                                    "recentData": "21.1,98.6",
                                    "statusId": "64",
                                    "name": "lu17-北013-空气温湿度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10940",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "270165C0F48F99",
                                    "lastCollectDate": 1537415730430,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e3fa3d00",
                                    "host": {
                                        "SENSOR": [
                                            "270165C0F48F9902"
                                        ]
                                    },
                                    "id": "270165C0F48F9902",
                                    "owner": "administrator",
                                    "comments": "e3fa3d00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北013-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "270165C0F48F99",
                                    "recentData": "22.7",
                                    "statusId": "64",
                                    "name": "lu17-北013-土壤水分",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10939",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "270165C0F48F99",
                                    "lastCollectDate": 1537415719615,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e3fa3d00",
                                    "host": {
                                        "SENSOR": [
                                            "270165C0F48F9901"
                                        ]
                                    },
                                    "id": "270165C0F48F9901",
                                    "owner": "administrator",
                                    "comments": "e3fa3d00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北013-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "270165C0F48F99",
                                    "recentData": "1338",
                                    "statusId": "64",
                                    "name": "lu17-北013-二氧化碳",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                }
                            ],
                            "shortAddr": "e3fa3d00",
                            "name": "lu17-北013",
                            "host": {
                                "07": [
                                    "270165C0F48F99"
                                ]
                            },
                            "location": "wf-szjj-003",
                            "id": "270165C0F48F99"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-北001"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-003",
                            "parentId": "5B0165944FC66D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10932",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "1C01656B91039D",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "aee08a00",
                                    "host": {
                                        "SENSOR": [
                                            "1C01656B91039D21"
                                        ]
                                    },
                                    "id": "1C01656B91039D21",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北001-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "1C01656B91039D",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-北001-开关",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10931",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "1C01656B91039D",
                                    "lastCollectDate": 1537490835780,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "aee08a00",
                                    "host": {
                                        "SENSOR": [
                                            "1C01656B91039D08"
                                        ]
                                    },
                                    "id": "1C01656B91039D08",
                                    "owner": "administrator",
                                    "comments": "aee08a00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北001-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "1C01656B91039D",
                                    "recentData": "20.9",
                                    "statusId": "64",
                                    "name": "lu17-北001-土壤温度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10930",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "1C01656B91039D",
                                    "lastCollectDate": 1537498081714,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "aee08a00",
                                    "host": {
                                        "SENSOR": [
                                            "1C01656B91039D04"
                                        ]
                                    },
                                    "id": "1C01656B91039D04",
                                    "owner": "administrator",
                                    "comments": "aee08a00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北001-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "1C01656B91039D",
                                    "recentData": "9.2",
                                    "statusId": "64",
                                    "name": "lu17-北001-土壤水分",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10929",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "1C01656B91039D",
                                    "lastCollectDate": 1537490815166,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "aee08a00",
                                    "host": {
                                        "SENSOR": [
                                            "1C01656B91039D02"
                                        ]
                                    },
                                    "id": "1C01656B91039D02",
                                    "owner": "administrator",
                                    "comments": "aee08a00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北001-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "1C01656B91039D",
                                    "recentData": "3200",
                                    "statusId": "64",
                                    "name": "lu17-北001-二氧化碳",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10928",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-003",
                                    "deviceId": "1C01656B91039D",
                                    "lastCollectDate": 1537259957484,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "aee08a00",
                                    "host": {
                                        "SENSOR": [
                                            "1C01656B91039D01"
                                        ]
                                    },
                                    "id": "1C01656B91039D01",
                                    "owner": "administrator",
                                    "comments": "aee08a00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-北001-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "1C01656B91039D",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-北001-空气温湿度",
                                    "location": "wf-szjj-003",
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                }
                            ],
                            "shortAddr": "aee08a00",
                            "name": "lu17-北001",
                            "host": {
                                "07": [
                                    "1C01656B91039D"
                                ]
                            },
                            "location": "wf-szjj-003",
                            "id": "1C01656B91039D"
                        }
                    ],
                    "shortAddr": "0000",
                    "name": "北凌家院北环境控制中心",
                    "host": {
                        "09": [
                            "5B0165944FC66D"
                        ]
                    },
                    "location": "北凌家院南环境控制中心",
                    "id": "5B0165944FC66D"
                },
                {
                    "owner": "administrator",
                    "devStatus": 0,
                    "comments": "北凌家院环境控制中心",
                    "manager": [],
                    "dependsOn": [
                        "北凌家院南环境控制中心"
                    ],
                    "ip": "www.fmbj.com.cn",
                    "onlineStatus": 0,
                    "icon": "iconfont icon-fanmihezi",
                    "gps": {
                        "latitude": null,
                        "longitude": null
                    },
                    "type": {
                        "typeId": "09",
                        "typeDescription": "协调器设备"
                    },
                    "uuid": "wf-szjj-001",
                    "parentId": "10117",
                    "statusId": null,
                    "children": [{
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-南012"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-001",
                            "parentId": "9A0163BB1B1A8D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10871",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "ED0165358546D0",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "aabe4d01",
                                    "host": {
                                        "SENSOR": [
                                            "ED0165358546D021"
                                        ]
                                    },
                                    "id": "ED0165358546D021",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南012-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "ED0165358546D0",
                                    "recentData": null,
                                    "statusId": "64",
                                    "name": "lu17-南012-开关",
                                    "location": null,
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10870",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "ED0165358546D0",
                                    "lastCollectDate": 1537265357809,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "aabe4d01",
                                    "host": {
                                        "SENSOR": [
                                            "ED0165358546D008"
                                        ]
                                    },
                                    "id": "ED0165358546D008",
                                    "owner": "administrator",
                                    "comments": "aabe4d01",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南012-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "ED0165358546D0",
                                    "recentData": "23.9",
                                    "statusId": "64",
                                    "name": "lu17-南012-土壤水分",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10869",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "ED0165358546D0",
                                    "lastCollectDate": 1537265347501,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "aabe4d01",
                                    "host": {
                                        "SENSOR": [
                                            "ED0165358546D004"
                                        ]
                                    },
                                    "id": "ED0165358546D004",
                                    "owner": "administrator",
                                    "comments": "aabe4d01",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南012-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "ED0165358546D0",
                                    "recentData": "22.9,77",
                                    "statusId": "64",
                                    "name": "lu17-南012-空气温湿度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10868",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "ED0165358546D0",
                                    "lastCollectDate": 1537252423010,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "aabe4d01",
                                    "host": {
                                        "SENSOR": [
                                            "ED0165358546D002"
                                        ]
                                    },
                                    "id": "ED0165358546D002",
                                    "owner": "administrator",
                                    "comments": "aabe4d01",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南012-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "ED0165358546D0",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-南012-土壤温度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10867",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "ED0165358546D0",
                                    "lastCollectDate": 1537265326881,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "aabe4d01",
                                    "host": {
                                        "SENSOR": [
                                            "ED0165358546D001"
                                        ]
                                    },
                                    "id": "ED0165358546D001",
                                    "owner": "administrator",
                                    "comments": "aabe4d01",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南012-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "ED0165358546D0",
                                    "recentData": "1226",
                                    "statusId": "64",
                                    "name": "lu17-南012-二氧化碳",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                }
                            ],
                            "shortAddr": "aabe4d01",
                            "name": "lu17-南012",
                            "host": {
                                "07": [
                                    "ED0165358546D0"
                                ]
                            },
                            "location": null,
                            "id": "ED0165358546D0"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-南003"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-001",
                            "parentId": "9A0163BB1B1A8D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10917",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "E149C5F93488C1",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e7f35701",
                                    "host": {
                                        "SENSOR": [
                                            "E149C5F93488C121"
                                        ]
                                    },
                                    "id": "E149C5F93488C121",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南003-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "E149C5F93488C1",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-南003-开关",
                                    "location": null,
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10845",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "E149C5F93488C1",
                                    "lastCollectDate": 1537260221751,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e7f35701",
                                    "host": {
                                        "SENSOR": [
                                            "E149C5F93488C108"
                                        ]
                                    },
                                    "id": "E149C5F93488C108",
                                    "owner": "administrator",
                                    "comments": "e7f35701",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南003-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "E149C5F93488C1",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-南003-土壤温度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10844",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "E149C5F93488C1",
                                    "lastCollectDate": 1537412583904,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e7f35701",
                                    "host": {
                                        "SENSOR": [
                                            "E149C5F93488C104"
                                        ]
                                    },
                                    "id": "E149C5F93488C104",
                                    "owner": "administrator",
                                    "comments": "e7f35701",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南003-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "E149C5F93488C1",
                                    "recentData": "24.3",
                                    "statusId": "64",
                                    "name": "lu17-南003-土壤水分",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10843",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "E149C5F93488C1",
                                    "lastCollectDate": 1537411336138,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e7f35701",
                                    "host": {
                                        "SENSOR": [
                                            "E149C5F93488C102"
                                        ]
                                    },
                                    "id": "E149C5F93488C102",
                                    "owner": "administrator",
                                    "comments": "e7f35701",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南003-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "E149C5F93488C1",
                                    "recentData": "20.3,99.1",
                                    "statusId": "64",
                                    "name": "lu17-南003-空气温湿度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10842",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "E149C5F93488C1",
                                    "lastCollectDate": 1537412563293,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e7f35701",
                                    "host": {
                                        "SENSOR": [
                                            "E149C5F93488C101"
                                        ]
                                    },
                                    "id": "E149C5F93488C101",
                                    "owner": "administrator",
                                    "comments": "e7f35701",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南003-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "E149C5F93488C1",
                                    "recentData": "1104",
                                    "statusId": "64",
                                    "name": "lu17-南003-二氧化碳",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                }
                            ],
                            "shortAddr": "e7f35701",
                            "name": "lu17-南003",
                            "host": {
                                "07": [
                                    "E149C5F93488C1"
                                ]
                            },
                            "location": null,
                            "id": "E149C5F93488C1"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-南010"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-001",
                            "parentId": "9A0163BB1B1A8D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10891",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "AC0165116D6625",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "51dcb501",
                                    "host": {
                                        "SENSOR": [
                                            "AC0165116D662521"
                                        ]
                                    },
                                    "id": "AC0165116D662521",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南010-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "AC0165116D6625",
                                    "recentData": null,
                                    "statusId": "64",
                                    "name": "lu17-南010-开关",
                                    "location": null,
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10890",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "AC0165116D6625",
                                    "lastCollectDate": 1537252687668,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "51dcb501",
                                    "host": {
                                        "SENSOR": [
                                            "AC0165116D662508"
                                        ]
                                    },
                                    "id": "AC0165116D662508",
                                    "owner": "administrator",
                                    "comments": "51dcb501",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南010-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "AC0165116D6625",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-南010-土壤温度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10889",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "AC0165116D6625",
                                    "lastCollectDate": 1537265371520,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "51dcb501",
                                    "host": {
                                        "SENSOR": [
                                            "AC0165116D662504"
                                        ]
                                    },
                                    "id": "AC0165116D662504",
                                    "owner": "administrator",
                                    "comments": "51dcb501",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南010-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "AC0165116D6625",
                                    "recentData": "19.3",
                                    "statusId": "64",
                                    "name": "lu17-南010-土壤水分",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10888",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "AC0165116D6625",
                                    "lastCollectDate": 1537265361213,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "51dcb501",
                                    "host": {
                                        "SENSOR": [
                                            "AC0165116D662502"
                                        ]
                                    },
                                    "id": "AC0165116D662502",
                                    "owner": "administrator",
                                    "comments": "51dcb501",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南010-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "AC0165116D6625",
                                    "recentData": "23.3,75.9",
                                    "statusId": "64",
                                    "name": "lu17-南010-空气温湿度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10887",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "AC0165116D6625",
                                    "lastCollectDate": 1537265350905,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "51dcb501",
                                    "host": {
                                        "SENSOR": [
                                            "AC0165116D662501"
                                        ]
                                    },
                                    "id": "AC0165116D662501",
                                    "owner": "administrator",
                                    "comments": "51dcb501",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南010-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "AC0165116D6625",
                                    "recentData": "1667",
                                    "statusId": "64",
                                    "name": "lu17-南010-二氧化碳",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                }
                            ],
                            "shortAddr": "51dcb501",
                            "name": "lu17-南010",
                            "host": {
                                "07": [
                                    "AC0165116D6625"
                                ]
                            },
                            "location": null,
                            "id": "AC0165116D6625"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": "ca469f01--",
                            "manager": [],
                            "dependsOn": [
                                "lu17-南002"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-001",
                            "parentId": "9A0163BB1B1A8D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10866",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "9601650C4E644D",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "ca469f01",
                                    "host": {
                                        "SENSOR": [
                                            "9601650C4E644D21"
                                        ]
                                    },
                                    "id": "9601650C4E644D21",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南002-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "9601650C4E644D",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-南002-开关",
                                    "location": null,
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10865",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "9601650C4E644D",
                                    "lastCollectDate": 1537257153479,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "ca469f01",
                                    "host": {
                                        "SENSOR": [
                                            "9601650C4E644D08"
                                        ]
                                    },
                                    "id": "9601650C4E644D08",
                                    "owner": "administrator",
                                    "comments": "ca469f01",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南002-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "9601650C4E644D",
                                    "recentData": "26.8",
                                    "statusId": "64",
                                    "name": "lu17-南002-土壤温度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10864",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "9601650C4E644D",
                                    "lastCollectDate": 1537265795030,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "ca469f01",
                                    "host": {
                                        "SENSOR": [
                                            "9601650C4E644D02"
                                        ]
                                    },
                                    "id": "9601650C4E644D02",
                                    "owner": "administrator",
                                    "comments": "ca469f01",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南002-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "9601650C4E644D",
                                    "recentData": "22.3,78.8",
                                    "statusId": "64",
                                    "name": "lu17-南002-空气温湿度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10863",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "9601650C4E644D",
                                    "lastCollectDate": 1537265805340,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "ca469f01",
                                    "host": {
                                        "SENSOR": [
                                            "9601650C4E644D04"
                                        ]
                                    },
                                    "id": "9601650C4E644D04",
                                    "owner": "administrator",
                                    "comments": "ca469f01",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南002-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "9601650C4E644D",
                                    "recentData": "28.6",
                                    "statusId": "64",
                                    "name": "lu17-南002-土壤水分",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10862",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "9601650C4E644D",
                                    "lastCollectDate": 1537265784734,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "ca469f01",
                                    "host": {
                                        "SENSOR": [
                                            "9601650C4E644D01"
                                        ]
                                    },
                                    "id": "9601650C4E644D01",
                                    "owner": "administrator",
                                    "comments": "ca469f01",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南002-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "9601650C4E644D",
                                    "recentData": "2040",
                                    "statusId": "64",
                                    "name": "lu17-南002-二氧化碳",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                }
                            ],
                            "shortAddr": "ca469f01",
                            "name": "lu17-南002",
                            "host": {
                                "07": [
                                    "9601650C4E644D"
                                ]
                            },
                            "location": null,
                            "id": "9601650C4E644D"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-南水泵"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-001",
                            "parentId": "9A0163BB1B1A8D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "50",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-fanmi-kaiguan",
                                    "terminalId": "10884",
                                    "type": {
                                        "typeId": "",
                                        "typeDescription": "开关类设备"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "8F0165359C6DB7",
                                    "lastCollectDate": null,
                                    "deviceNum": "22",
                                    "partyTypeId": "",
                                    "shortAddr": "160d1401",
                                    "host": {
                                        "": [
                                            "8F0165359C6DB722"
                                        ]
                                    },
                                    "id": "8F0165359C6DB722",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南水泵-4号"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "50",
                                        "开关类设备"
                                    ],
                                    "parentId": "8F0165359C6DB7",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-南水泵-4号",
                                    "location": null,
                                    "deviceTypeDescription": "开关",
                                    "sensorTypeId": "50"
                                },
                                {
                                    "deviceTypeId": "50",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-fanmi-kaiguan",
                                    "terminalId": "10883",
                                    "type": {
                                        "typeId": "",
                                        "typeDescription": "开关类设备"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "8F0165359C6DB7",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "",
                                    "shortAddr": "160d1401",
                                    "host": {
                                        "": [
                                            "8F0165359C6DB721"
                                        ]
                                    },
                                    "id": "8F0165359C6DB721",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南水泵-3号"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "50",
                                        "开关类设备"
                                    ],
                                    "parentId": "8F0165359C6DB7",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-南水泵-3号",
                                    "location": null,
                                    "deviceTypeDescription": "开关",
                                    "sensorTypeId": "50"
                                }
                            ],
                            "shortAddr": "160d1401",
                            "name": "lu17-南水泵",
                            "host": {
                                "07": [
                                    "8F0165359C6DB7"
                                ]
                            },
                            "location": null,
                            "id": "8F0165359C6DB7"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": "02a13600",
                            "manager": [],
                            "dependsOn": [
                                "lu17-南009"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-001",
                            "parentId": "9A0163BB1B1A8D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10922",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "660165EB5E966E",
                                    "lastCollectDate": 1537259645888,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "02a13600",
                                    "host": {
                                        "SENSOR": [
                                            "660165EB5E966E08"
                                        ]
                                    },
                                    "id": "660165EB5E966E08",
                                    "owner": "administrator",
                                    "comments": "02a13600",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南009-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "660165EB5E966E",
                                    "recentData": "24.6,76.6",
                                    "statusId": "64",
                                    "name": "lu17-南009-空气温湿度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10921",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "660165EB5E966E",
                                    "lastCollectDate": 1537259635578,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "02a13600",
                                    "host": {
                                        "SENSOR": [
                                            "660165EB5E966E04"
                                        ]
                                    },
                                    "id": "660165EB5E966E04",
                                    "owner": "administrator",
                                    "comments": "02a13600",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南009-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "660165EB5E966E",
                                    "recentData": "3200",
                                    "statusId": "64",
                                    "name": "lu17-南009-二氧化碳",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10920",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "660165EB5E966E",
                                    "lastCollectDate": 1537259625258,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "02a13600",
                                    "host": {
                                        "SENSOR": [
                                            "660165EB5E966E02"
                                        ]
                                    },
                                    "id": "660165EB5E966E02",
                                    "owner": "administrator",
                                    "comments": "02a13600",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南009-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "660165EB5E966E",
                                    "recentData": "3.6",
                                    "statusId": "64",
                                    "name": "lu17-南009-土壤水分",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10919",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "660165EB5E966E",
                                    "lastCollectDate": 1537259614946,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "02a13600",
                                    "host": {
                                        "SENSOR": [
                                            "660165EB5E966E01"
                                        ]
                                    },
                                    "id": "660165EB5E966E01",
                                    "owner": "administrator",
                                    "comments": "02a13600",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南009-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "660165EB5E966E",
                                    "recentData": "23.6",
                                    "statusId": "64",
                                    "name": "lu17-南009-土壤温度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10918",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "660165EB5E966E",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "02a13600",
                                    "host": {
                                        "SENSOR": [
                                            "660165EB5E966E21"
                                        ]
                                    },
                                    "id": "660165EB5E966E21",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南009-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "660165EB5E966E",
                                    "recentData": null,
                                    "statusId": "64",
                                    "name": "lu17-南009-开关",
                                    "location": null,
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                }
                            ],
                            "shortAddr": "02a13600",
                            "name": "lu17-南009",
                            "host": {
                                "07": [
                                    "660165EB5E966E"
                                ]
                            },
                            "location": null,
                            "id": "660165EB5E966E"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-南001"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-001",
                            "parentId": "9A0163BB1B1A8D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10861",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "5E01650C3BDB8F",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "cf21c101",
                                    "host": {
                                        "SENSOR": [
                                            "5E01650C3BDB8F21"
                                        ]
                                    },
                                    "id": "5E01650C3BDB8F21",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南001-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "5E01650C3BDB8F",
                                    "recentData": null,
                                    "statusId": "00",
                                    "name": "lu17-南001-开关",
                                    "location": null,
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10860",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "5E01650C3BDB8F",
                                    "lastCollectDate": 1537265295754,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "cf21c101",
                                    "host": {
                                        "SENSOR": [
                                            "5E01650C3BDB8F08"
                                        ]
                                    },
                                    "id": "5E01650C3BDB8F08",
                                    "owner": "administrator",
                                    "comments": "cf21c101",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南001-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "5E01650C3BDB8F",
                                    "recentData": "23.6,72.2",
                                    "statusId": "64",
                                    "name": "lu17-南001-空气温湿度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10859",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "5E01650C3BDB8F",
                                    "lastCollectDate": 1537265285436,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "cf21c101",
                                    "host": {
                                        "SENSOR": [
                                            "5E01650C3BDB8F04"
                                        ]
                                    },
                                    "id": "5E01650C3BDB8F04",
                                    "owner": "administrator",
                                    "comments": "cf21c101",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南001-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "5E01650C3BDB8F",
                                    "recentData": "26.1",
                                    "statusId": "64",
                                    "name": "lu17-南001-土壤温度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10858",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "5E01650C3BDB8F",
                                    "lastCollectDate": 1537265275123,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "cf21c101",
                                    "host": {
                                        "SENSOR": [
                                            "5E01650C3BDB8F02"
                                        ]
                                    },
                                    "id": "5E01650C3BDB8F02",
                                    "owner": "administrator",
                                    "comments": "cf21c101",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南001-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "5E01650C3BDB8F",
                                    "recentData": "23.3",
                                    "statusId": "64",
                                    "name": "lu17-南001-土壤水分",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10857",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "5E01650C3BDB8F",
                                    "lastCollectDate": 1537259696349,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "cf21c101",
                                    "host": {
                                        "SENSOR": [
                                            "5E01650C3BDB8F01"
                                        ]
                                    },
                                    "id": "5E01650C3BDB8F01",
                                    "owner": "administrator",
                                    "comments": "cf21c101",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南001-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "5E01650C3BDB8F",
                                    "recentData": "2061",
                                    "statusId": "64",
                                    "name": "lu17-南001-二氧化碳",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                }
                            ],
                            "shortAddr": "cf21c101",
                            "name": "lu17-南001",
                            "host": {
                                "07": [
                                    "5E01650C3BDB8F"
                                ]
                            },
                            "location": null,
                            "id": "5E01650C3BDB8F"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-南005"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-001",
                            "parentId": "9A0163BB1B1A8D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10872",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "4E0165A3DADB24",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "5df8d801",
                                    "host": {
                                        "SENSOR": [
                                            "4E0165A3DADB2421"
                                        ]
                                    },
                                    "id": "4E0165A3DADB2421",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南005-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "4E0165A3DADB24",
                                    "recentData": null,
                                    "statusId": "64",
                                    "name": "lu17-南005-开关",
                                    "location": null,
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10831",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "4E0165A3DADB24",
                                    "lastCollectDate": 1537265578069,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "5df8d801",
                                    "host": {
                                        "SENSOR": [
                                            "4E0165A3DADB2408"
                                        ]
                                    },
                                    "id": "4E0165A3DADB2408",
                                    "owner": "administrator",
                                    "comments": "5df8d801",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南005-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "4E0165A3DADB24",
                                    "recentData": "24.2",
                                    "statusId": "64",
                                    "name": "lu17-南005-土壤水分",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10830",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "4E0165A3DADB24",
                                    "lastCollectDate": 1537265567785,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "5df8d801",
                                    "host": {
                                        "SENSOR": [
                                            "4E0165A3DADB2404"
                                        ]
                                    },
                                    "id": "4E0165A3DADB2404",
                                    "owner": "administrator",
                                    "comments": "5df8d801",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南005-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "4E0165A3DADB24",
                                    "recentData": "3200",
                                    "statusId": "64",
                                    "name": "lu17-南005-二氧化碳",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10829",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "4E0165A3DADB24",
                                    "lastCollectDate": 1537265557449,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "5df8d801",
                                    "host": {
                                        "SENSOR": [
                                            "4E0165A3DADB2402"
                                        ]
                                    },
                                    "id": "4E0165A3DADB2402",
                                    "owner": "administrator",
                                    "comments": "5df8d801",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南005-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "4E0165A3DADB24",
                                    "recentData": "24.5",
                                    "statusId": "64",
                                    "name": "lu17-南005-土壤温度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10828",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "4E0165A3DADB24",
                                    "lastCollectDate": 1537250800779,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "5df8d801",
                                    "host": {
                                        "SENSOR": [
                                            "4E0165A3DADB2401"
                                        ]
                                    },
                                    "id": "4E0165A3DADB2401",
                                    "owner": "administrator",
                                    "comments": "5df8d801",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南005-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "4E0165A3DADB24",
                                    "recentData": "26.5,57.8",
                                    "statusId": "64",
                                    "name": "lu17-南005-空气温湿度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                }
                            ],
                            "shortAddr": "5df8d801",
                            "name": "lu17-南005",
                            "host": {
                                "07": [
                                    "4E0165A3DADB24"
                                ]
                            },
                            "location": null,
                            "id": "4E0165A3DADB24"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-南004"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-001",
                            "parentId": "9A0163BB1B1A8D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10856",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "4401658F72766A",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "7e80fa00",
                                    "host": {
                                        "SENSOR": [
                                            "4401658F72766A21"
                                        ]
                                    },
                                    "id": "4401658F72766A21",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南004-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "4401658F72766A",
                                    "recentData": null,
                                    "statusId": "64",
                                    "name": "lu17-南004-开关",
                                    "location": null,
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10855",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "4401658F72766A",
                                    "lastCollectDate": 1537411356761,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "7e80fa00",
                                    "host": {
                                        "SENSOR": [
                                            "4401658F72766A08"
                                        ]
                                    },
                                    "id": "4401658F72766A08",
                                    "owner": "administrator",
                                    "comments": "7e80fa00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu18-南004-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "4401658F72766A",
                                    "recentData": "25.1",
                                    "statusId": "64",
                                    "name": "lu18-南004-土壤水分",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10854",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "4401658F72766A",
                                    "lastCollectDate": 1537252452973,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "7e80fa00",
                                    "host": {
                                        "SENSOR": [
                                            "4401658F72766A04"
                                        ]
                                    },
                                    "id": "4401658F72766A04",
                                    "owner": "administrator",
                                    "comments": "7e80fa00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南004-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "4401658F72766A",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-南004-二氧化碳",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10853",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "4401658F72766A",
                                    "lastCollectDate": 1537265476466,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "7e80fa00",
                                    "host": {
                                        "SENSOR": [
                                            "4401658F72766A02"
                                        ]
                                    },
                                    "id": "4401658F72766A02",
                                    "owner": "administrator",
                                    "comments": "7e80fa00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南004-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "4401658F72766A",
                                    "recentData": "23.3,76.1",
                                    "statusId": "64",
                                    "name": "lu17-南004-空气温湿度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10852",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "4401658F72766A",
                                    "lastCollectDate": 1537264847431,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "7e80fa00",
                                    "host": {
                                        "SENSOR": [
                                            "4401658F72766A01"
                                        ]
                                    },
                                    "id": "4401658F72766A01",
                                    "owner": "administrator",
                                    "comments": "7e80fa00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南004-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "4401658F72766A",
                                    "recentData": "23.6",
                                    "statusId": "64",
                                    "name": "lu17-南004-土壤温度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                }
                            ],
                            "shortAddr": "7e80fa00",
                            "name": "lu17-南004",
                            "host": {
                                "07": [
                                    "4401658F72766A"
                                ]
                            },
                            "location": null,
                            "id": "4401658F72766A"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-南011"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-001",
                            "parentId": "9A0163BB1B1A8D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10886",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "2F0165A4261427",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "d0212e00",
                                    "host": {
                                        "SENSOR": [
                                            "2F0165A426142721"
                                        ]
                                    },
                                    "id": "2F0165A426142721",
                                    "owner": "administrator",
                                    "comments": "d0212e00",
                                    "manager": [],
                                    "dependsOn": [
                                        "LU17-南011-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "2F0165A4261427",
                                    "recentData": null,
                                    "statusId": "64",
                                    "name": "LU17-南011-开关",
                                    "location": null,
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10885",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "2F0165A4261427",
                                    "lastCollectDate": 1537249990575,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "d0212e00",
                                    "host": {
                                        "SENSOR": [
                                            "2F0165A426142701"
                                        ]
                                    },
                                    "id": "2F0165A426142701",
                                    "owner": "administrator",
                                    "comments": "d0212e00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南011-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "2F0165A4261427",
                                    "recentData": "2967",
                                    "statusId": "64",
                                    "name": "lu17-南011-二氧化碳",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10836",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "2F0165A4261427",
                                    "lastCollectDate": 1537251520477,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "d0212e00",
                                    "host": {
                                        "SENSOR": [
                                            "2F0165A426142708"
                                        ]
                                    },
                                    "id": "2F0165A426142708",
                                    "owner": "administrator",
                                    "comments": "d0212e00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南011-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "2F0165A4261427",
                                    "recentData": "24.7",
                                    "statusId": "64",
                                    "name": "lu17-南011-土壤温度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10835",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "2F0165A4261427",
                                    "lastCollectDate": 1537251510172,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "d0212e00",
                                    "host": {
                                        "SENSOR": [
                                            "2F0165A426142704"
                                        ]
                                    },
                                    "id": "2F0165A426142704",
                                    "owner": "administrator",
                                    "comments": "d0212e00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南011-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "2F0165A4261427",
                                    "recentData": "26.8,64.3",
                                    "statusId": "64",
                                    "name": "lu17-南011-空气温湿度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10834",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "2F0165A4261427",
                                    "lastCollectDate": 1537251499854,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "d0212e00",
                                    "host": {
                                        "SENSOR": [
                                            "2F0165A426142702"
                                        ]
                                    },
                                    "id": "2F0165A426142702",
                                    "owner": "administrator",
                                    "comments": "d0212e00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南011-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "2F0165A4261427",
                                    "recentData": "9.3",
                                    "statusId": "64",
                                    "name": "lu17-南011-土壤水分",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "3C",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-daqiyali",
                                    "terminalId": "10833",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "大气压力传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "2F0165A4261427",
                                    "lastCollectDate": null,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "d0212e00",
                                    "host": {
                                        "SENSOR": [
                                            "2F0165A426142701"
                                        ]
                                    },
                                    "id": "2F0165A426142701",
                                    "owner": "administrator",
                                    "comments": "d0212e00",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南011-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "Kpa",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "大气压力",
                                        "typeStep": 1,
                                        "maxRange": "110",
                                        "seqId": 1,
                                        "minRange": "20"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3C",
                                        "大气压力传感器"
                                    ],
                                    "parentId": "2F0165A4261427",
                                    "recentData": null,
                                    "statusId": "64",
                                    "name": "lu17-南011-二氧化碳",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-大气压力传感器",
                                    "sensorTypeId": "13"
                                }
                            ],
                            "shortAddr": "d0212e00",
                            "name": "lu17-南011",
                            "host": {
                                "07": [
                                    "2F0165A4261427"
                                ]
                            },
                            "location": null,
                            "id": "2F0165A4261427"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-东001"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-001",
                            "parentId": "9A0163BB1B1A8D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10911",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "2A01651905D63E",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "70effc01",
                                    "host": {
                                        "SENSOR": [
                                            "2A01651905D63E21"
                                        ]
                                    },
                                    "id": "2A01651905D63E21",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-东001-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "2A01651905D63E",
                                    "recentData": null,
                                    "statusId": "64",
                                    "name": "lu17-东001-开关",
                                    "location": null,
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10910",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "2A01651905D63E",
                                    "lastCollectDate": 1537251075695,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "70effc01",
                                    "host": {
                                        "SENSOR": [
                                            "2A01651905D63E08"
                                        ]
                                    },
                                    "id": "2A01651905D63E08",
                                    "owner": "administrator",
                                    "comments": "70effc01",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-东001-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "2A01651905D63E",
                                    "recentData": "25.2",
                                    "statusId": "64",
                                    "name": "lu17-东001-土壤温度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10909",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "2A01651905D63E",
                                    "lastCollectDate": 1537251065382,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "70effc01",
                                    "host": {
                                        "SENSOR": [
                                            "2A01651905D63E04"
                                        ]
                                    },
                                    "id": "2A01651905D63E04",
                                    "owner": "administrator",
                                    "comments": "70effc01",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-东001-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "2A01651905D63E",
                                    "recentData": "75.6",
                                    "statusId": "64",
                                    "name": "lu17-东001-土壤水分",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10908",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "2A01651905D63E",
                                    "lastCollectDate": 1537251055074,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "70effc01",
                                    "host": {
                                        "SENSOR": [
                                            "2A01651905D63E02"
                                        ]
                                    },
                                    "id": "2A01651905D63E02",
                                    "owner": "administrator",
                                    "comments": "70effc01",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-东001-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "2A01651905D63E",
                                    "recentData": "26.3,72.3",
                                    "statusId": "64",
                                    "name": "lu17-东001-空气温湿度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10907",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "2A01651905D63E",
                                    "lastCollectDate": 1537251044766,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "70effc01",
                                    "host": {
                                        "SENSOR": [
                                            "2A01651905D63E01"
                                        ]
                                    },
                                    "id": "2A01651905D63E01",
                                    "owner": "administrator",
                                    "comments": "70effc01",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-东001-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "2A01651905D63E",
                                    "recentData": "3200",
                                    "statusId": "64",
                                    "name": "lu17-东001-二氧化碳",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                }
                            ],
                            "shortAddr": "70effc01",
                            "name": "lu17-东001",
                            "host": {
                                "07": [
                                    "2A01651905D63E"
                                ]
                            },
                            "location": null,
                            "id": "2A01651905D63E"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-南007"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-001",
                            "parentId": "9A0163BB1B1A8D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10882",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "280165140730E5",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "92ec0200",
                                    "host": {
                                        "SENSOR": [
                                            "280165140730E521"
                                        ]
                                    },
                                    "id": "280165140730E521",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南007-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "280165140730E5",
                                    "recentData": null,
                                    "statusId": "64",
                                    "name": "lu17-南007-开关",
                                    "location": null,
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10881",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "280165140730E5",
                                    "lastCollectDate": 1537254062558,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "92ec0200",
                                    "host": {
                                        "SENSOR": [
                                            "280165140730E508"
                                        ]
                                    },
                                    "id": "280165140730E508",
                                    "owner": "administrator",
                                    "comments": "92ec0200",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南007-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "280165140730E5",
                                    "recentData": "24.9",
                                    "statusId": "64",
                                    "name": "lu17-南007-土壤温度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10880",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "280165140730E5",
                                    "lastCollectDate": 1537265808017,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "92ec0200",
                                    "host": {
                                        "SENSOR": [
                                            "280165140730E504"
                                        ]
                                    },
                                    "id": "280165140730E504",
                                    "owner": "administrator",
                                    "comments": "92ec0200",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南007-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "280165140730E5",
                                    "recentData": "13.6",
                                    "statusId": "64",
                                    "name": "lu17-南007-土壤水分",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10879",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "280165140730E5",
                                    "lastCollectDate": 1537265797709,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "92ec0200",
                                    "host": {
                                        "SENSOR": [
                                            "280165140730E502"
                                        ]
                                    },
                                    "id": "280165140730E502",
                                    "owner": "administrator",
                                    "comments": "92ec0200",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南007-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "280165140730E5",
                                    "recentData": "22.3,78.3",
                                    "statusId": "64",
                                    "name": "lu17-南007-空气温湿度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10878",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "280165140730E5",
                                    "lastCollectDate": 1537265787400,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "92ec0200",
                                    "host": {
                                        "SENSOR": [
                                            "280165140730E501"
                                        ]
                                    },
                                    "id": "280165140730E501",
                                    "owner": "administrator",
                                    "comments": "92ec0200",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南007-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "280165140730E5",
                                    "recentData": "2019",
                                    "statusId": "64",
                                    "name": "lu17-南007-二氧化碳",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                }
                            ],
                            "shortAddr": "92ec0200",
                            "name": "lu17-南007",
                            "host": {
                                "07": [
                                    "280165140730E5"
                                ]
                            },
                            "location": null,
                            "id": "280165140730E5"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-南013"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-001",
                            "parentId": "9A0163BB1B1A8D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10851",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "2401651E502D7D",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "fb5fa701",
                                    "host": {
                                        "SENSOR": [
                                            "2401651E502D7D21"
                                        ]
                                    },
                                    "id": "2401651E502D7D21",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南013-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "2401651E502D7D",
                                    "recentData": null,
                                    "statusId": "64",
                                    "name": "lu17-南013-开关",
                                    "location": null,
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10850",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "2401651E502D7D",
                                    "lastCollectDate": 1537252566848,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "fb5fa701",
                                    "host": {
                                        "SENSOR": [
                                            "2401651E502D7D08"
                                        ]
                                    },
                                    "id": "2401651E502D7D08",
                                    "owner": "administrator",
                                    "comments": "fb5fa701",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南013-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "2401651E502D7D",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-南013-土壤温度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10849",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "2401651E502D7D",
                                    "lastCollectDate": 1537260052599,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "fb5fa701",
                                    "host": {
                                        "SENSOR": [
                                            "2401651E502D7D04"
                                        ]
                                    },
                                    "id": "2401651E502D7D04",
                                    "owner": "administrator",
                                    "comments": "fb5fa701",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南013-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "2401651E502D7D",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-南013-土壤水分",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10848",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "2401651E502D7D",
                                    "lastCollectDate": 1537260052598,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "fb5fa701",
                                    "host": {
                                        "SENSOR": [
                                            "2401651E502D7D02"
                                        ]
                                    },
                                    "id": "2401651E502D7D02",
                                    "owner": "administrator",
                                    "comments": "fb5fa701",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南013-空气温湿"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "2401651E502D7D",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-南013-空气温湿",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10847",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "2401651E502D7D",
                                    "lastCollectDate": 1537260052598,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "fb5fa701",
                                    "host": {
                                        "SENSOR": [
                                            "2401651E502D7D01"
                                        ]
                                    },
                                    "id": "2401651E502D7D01",
                                    "owner": "administrator",
                                    "comments": "fb5fa701",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南013-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "2401651E502D7D",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-南013-二氧化碳",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                }
                            ],
                            "shortAddr": "fb5fa701",
                            "name": "lu17-南013",
                            "host": {
                                "07": [
                                    "2401651E502D7D"
                                ]
                            },
                            "location": null,
                            "id": "2401651E502D7D"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-南006"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-001",
                            "parentId": "9A0163BB1B1A8D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10877",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "22016518A522A8",
                                    "lastCollectDate": 1537252721239,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "ae99e100",
                                    "host": {
                                        "SENSOR": [
                                            "22016518A522A808"
                                        ]
                                    },
                                    "id": "22016518A522A808",
                                    "owner": "administrator",
                                    "comments": "ae99e100",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南006-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "22016518A522A8",
                                    "recentData": "",
                                    "statusId": "64",
                                    "name": "lu17-南006-土壤温度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10876",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "22016518A522A8",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "ae99e100",
                                    "host": {
                                        "SENSOR": [
                                            "22016518A522A821"
                                        ]
                                    },
                                    "id": "22016518A522A821",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南006-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "22016518A522A8",
                                    "recentData": null,
                                    "statusId": "64",
                                    "name": "lu17-南006-开关",
                                    "location": null,
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                },
                                {
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10875",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "22016518A522A8",
                                    "lastCollectDate": 1537265693336,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "ae99e100",
                                    "host": {
                                        "SENSOR": [
                                            "22016518A522A804"
                                        ]
                                    },
                                    "id": "22016518A522A804",
                                    "owner": "administrator",
                                    "comments": "ae99e100",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南006-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "22016518A522A8",
                                    "recentData": "20.5",
                                    "statusId": "64",
                                    "name": "lu17-南006-土壤水分",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10874",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "22016518A522A8",
                                    "lastCollectDate": 1537265683032,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "ae99e100",
                                    "host": {
                                        "SENSOR": [
                                            "22016518A522A802"
                                        ]
                                    },
                                    "id": "22016518A522A802",
                                    "owner": "administrator",
                                    "comments": "ae99e100",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南006-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "22016518A522A8",
                                    "recentData": "22.5,77.5",
                                    "statusId": "64",
                                    "name": "lu17-南006-空气温湿度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10873",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "22016518A522A8",
                                    "lastCollectDate": 1537265672720,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "ae99e100",
                                    "host": {
                                        "SENSOR": [
                                            "22016518A522A801"
                                        ]
                                    },
                                    "id": "22016518A522A801",
                                    "owner": "administrator",
                                    "comments": "ae99e100",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南006-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "22016518A522A8",
                                    "recentData": "1646",
                                    "statusId": "64",
                                    "name": "lu17-南006-二氧化碳",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                }
                            ],
                            "shortAddr": "ae99e100",
                            "name": "lu17-南006",
                            "host": {
                                "07": [
                                    "22016518A522A8"
                                ]
                            },
                            "location": null,
                            "id": "22016518A522A8"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": "7e80b800",
                            "manager": [],
                            "dependsOn": [
                                "lu17-南008"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-001",
                            "parentId": "9A0163BB1B1A8D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "3A",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangshidu",
                                    "terminalId": "10927",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤水分传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "1A0165EB5D6122",
                                    "lastCollectDate": 1537253639181,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "7e80b800",
                                    "host": {
                                        "SENSOR": [
                                            "1A0165EB5D612208"
                                        ]
                                    },
                                    "id": "1A0165EB5D612208",
                                    "owner": "administrator",
                                    "comments": "7e80b800",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南008-土壤水分"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤水分",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3A",
                                        "土壤水分传感器"
                                    ],
                                    "parentId": "1A0165EB5D6122",
                                    "recentData": "29.2",
                                    "statusId": "64",
                                    "name": "lu17-南008-土壤水分",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤水分传感器",
                                    "sensorTypeId": "11"
                                },
                                {
                                    "deviceTypeId": "39",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-turangwendu",
                                    "terminalId": "10926",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "土壤温度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "1A0165EB5D6122",
                                    "lastCollectDate": null,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "7e80b800",
                                    "host": {
                                        "SENSOR": [
                                            "1A0165EB5D612204"
                                        ]
                                    },
                                    "id": "1A0165EB5D612204",
                                    "owner": "administrator",
                                    "comments": "7e80b800",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南008-土壤温度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "土壤温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "39",
                                        "土壤温度传感器"
                                    ],
                                    "parentId": "1A0165EB5D6122",
                                    "recentData": null,
                                    "statusId": "64",
                                    "name": "lu17-南008-土壤温度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-土壤温度传感器",
                                    "sensorTypeId": "02"
                                },
                                {
                                    "deviceTypeId": "3B",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-eryanghuatan",
                                    "terminalId": "10925",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "二氧化碳传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "1A0165EB5D6122",
                                    "lastCollectDate": 1537263135724,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "7e80b800",
                                    "host": {
                                        "SENSOR": [
                                            "1A0165EB5D612202"
                                        ]
                                    },
                                    "id": "1A0165EB5D612202",
                                    "owner": "administrator",
                                    "comments": "7e80b800",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南008-二氧化碳"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "ppm",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "二氧化碳",
                                        "typeStep": 1,
                                        "maxRange": "5000",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3B",
                                        "二氧化碳传感器"
                                    ],
                                    "parentId": "1A0165EB5D6122",
                                    "recentData": "3200",
                                    "statusId": "64",
                                    "name": "lu17-南008-二氧化碳",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-二氧化碳传感器",
                                    "sensorTypeId": "12"
                                },
                                {
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10924",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "1A0165EB5D6122",
                                    "lastCollectDate": 1537253546373,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "7e80b800",
                                    "host": {
                                        "SENSOR": [
                                            "1A0165EB5D612201"
                                        ]
                                    },
                                    "id": "1A0165EB5D612201",
                                    "owner": "administrator",
                                    "comments": "7e80b800",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南008-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "1A0165EB5D6122",
                                    "recentData": "27.5,58.4",
                                    "statusId": "64",
                                    "name": "lu17-南008-空气温湿度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "51",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-zihuifu",
                                    "terminalId": "10923",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "自恢复开关"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "1A0165EB5D6122",
                                    "lastCollectDate": null,
                                    "deviceNum": "21",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "7e80b800",
                                    "host": {
                                        "SENSOR": [
                                            "1A0165EB5D612221"
                                        ]
                                    },
                                    "id": "1A0165EB5D612221",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-南008-开关"
                                    ],
                                    "module": "01",
                                    "sensorDetail": [],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "51",
                                        "自恢复开关"
                                    ],
                                    "parentId": "1A0165EB5D6122",
                                    "recentData": null,
                                    "statusId": "64",
                                    "name": "lu17-南008-开关",
                                    "location": null,
                                    "deviceTypeDescription": "自恢复开关",
                                    "sensorTypeId": null
                                }
                            ],
                            "shortAddr": "7e80b800",
                            "name": "lu17-南008",
                            "host": {
                                "07": [
                                    "1A0165EB5D6122"
                                ]
                            },
                            "location": null,
                            "id": "1A0165EB5D6122"
                        },
                        {
                            "owner": "administrator",
                            "devStatus": 0,
                            "comments": null,
                            "manager": [],
                            "dependsOn": [
                                "lu17-基站"
                            ],
                            "onlineStatus": 0,
                            "icon": "iconfont icon-fanmiluyouqi",
                            "gps": {
                                "latitude": null,
                                "longitude": null
                            },
                            "type": {
                                "typeId": "07",
                                "typeDescription": "路由设备"
                            },
                            "uuid": "wf-szjj-001",
                            "parentId": "9A0163BB1B1A8D",
                            "statusId": "64",
                            "children": [{
                                    "deviceTypeId": "33",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-kongqiwenshidu1",
                                    "terminalId": "10768",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": " 空气温湿度传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "E20164EFB8FE12",
                                    "lastCollectDate": 1537865986249,
                                    "deviceNum": "08",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e15f8900",
                                    "host": {
                                        "SENSOR": [
                                            "E20164EFB8FE1208"
                                        ]
                                    },
                                    "id": "E20164EFB8FE1208",
                                    "owner": "administrator",
                                    "comments": "e15f8900",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-基站-空气温湿度"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                            "unit": "℃",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "温度",
                                            "typeStep": 1,
                                            "maxRange": "70",
                                            "seqId": 1,
                                            "minRange": "-30"
                                        },
                                        {
                                            "unit": "%",
                                            "expression": "((X1 * 256) + X2)/10.0",
                                            "description": "湿度",
                                            "typeStep": 1,
                                            "maxRange": "100",
                                            "seqId": 2,
                                            "minRange": "0"
                                        }
                                    ],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "33",
                                        " 空气温湿度传感器"
                                    ],
                                    "parentId": "E20164EFB8FE12",
                                    "recentData": "20.7,67.8",
                                    "statusId": "64",
                                    "name": "lu17-基站-空气温湿度",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                    "sensorTypeId": "05"
                                },
                                {
                                    "deviceTypeId": "34",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-fengsu1",
                                    "terminalId": "10767",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "风速传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "E20164EFB8FE12",
                                    "lastCollectDate": 1537865975933,
                                    "deviceNum": "04",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e15f8900",
                                    "host": {
                                        "SENSOR": [
                                            "E20164EFB8FE1204"
                                        ]
                                    },
                                    "id": "E20164EFB8FE1204",
                                    "owner": "administrator",
                                    "comments": null,
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-基站-风速"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "km/h",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "风速",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "34",
                                        "风速传感器"
                                    ],
                                    "parentId": "E20164EFB8FE12",
                                    "recentData": "16.3",
                                    "statusId": "64",
                                    "name": "lu17-基站-风速",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-风速传感器",
                                    "sensorTypeId": "06"
                                },
                                {
                                    "deviceTypeId": "3D",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-fengxiang",
                                    "terminalId": "10766",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "风向传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "E20164EFB8FE12",
                                    "lastCollectDate": 1537865965619,
                                    "deviceNum": "02",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e15f8900",
                                    "host": {
                                        "SENSOR": [
                                            "E20164EFB8FE1202"
                                        ]
                                    },
                                    "id": "E20164EFB8FE1202",
                                    "owner": "administrator",
                                    "comments": "e15f8900",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-基站-风向传感器"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "方位",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "风向",
                                        "typeStep": 1,
                                        "maxRange": "360",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3D",
                                        "风向传感器"
                                    ],
                                    "parentId": "E20164EFB8FE12",
                                    "recentData": "112.5",
                                    "statusId": "64",
                                    "name": "lu17-基站-风向传感器",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-风向传感器",
                                    "sensorTypeId": "14"
                                },
                                {
                                    "deviceTypeId": "3F",
                                    "devStatus": 0,
                                    "onlineStatus": 0,
                                    "icon": "iconfont icon-guangzhao",
                                    "terminalId": "10765",
                                    "type": {
                                        "typeId": "SENSOR",
                                        "typeDescription": "光照传感器"
                                    },
                                    "uuid": "wf-szjj-001",
                                    "deviceId": "E20164EFB8FE12",
                                    "lastCollectDate": 1537866574032,
                                    "deviceNum": "01",
                                    "partyTypeId": "SENSOR",
                                    "shortAddr": "e15f8900",
                                    "host": {
                                        "SENSOR": [
                                            "E20164EFB8FE1201"
                                        ]
                                    },
                                    "id": "E20164EFB8FE1201",
                                    "owner": "administrator",
                                    "comments": "e15f8900",
                                    "manager": [],
                                    "dependsOn": [
                                        "lu17-基站-光照"
                                    ],
                                    "module": "00",
                                    "sensorDetail": [{
                                        "unit": "KLux",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "光照",
                                        "typeStep": 1,
                                        "maxRange": "200",
                                        "seqId": 1,
                                        "minRange": "0"
                                    }],
                                    "gps": {
                                        "latitude": null,
                                        "longitude": null
                                    },
                                    "technos": [
                                        "3F",
                                        "光照传感器"
                                    ],
                                    "parentId": "E20164EFB8FE12",
                                    "recentData": "3.2",
                                    "statusId": "64",
                                    "name": "lu17-基站-光照",
                                    "location": null,
                                    "deviceTypeDescription": "FM-001-光照传感器",
                                    "sensorTypeId": "00"
                                }
                            ],
                            "shortAddr": "e15f8900",
                            "name": "lu17-基站",
                            "host": {
                                "07": [
                                    "E20164EFB8FE12"
                                ]
                            },
                            "location": null,
                            "id": "E20164EFB8FE12"
                        }
                    ],
                    "shortAddr": "0000",
                    "name": "北凌家院南环境控制中心",
                    "host": {
                        "09": [
                            "9A0163BB1B1A8D"
                        ]
                    },
                    "location": "北凌家院",
                    "id": "9A0163BB1B1A8D"
                }
            ],
            "name": "北凌家院有机农场",
            "icon": "iconfont icon-fanmichangjing",
            "host": {
                "SCENE": [
                    "10117"
                ]
            },
            "id": "10117",
            "type": {
                "typeId": "SCENE",
                "typeDescription": "场景"
            },
            "parentId": "10064"
        },
        {
            "owner": "administrator",
            "comments": "孙家庄有机农场",
            "statusId": "PARTY_ENABLED",
            "manager": [],
            "dependsOn": [
                "孙家庄有机农场"
            ],
            "children": [{
                    "owner": "administrator",
                    "devStatus": 0,
                    "comments": null,
                    "manager": [],
                    "dependsOn": [
                        "孙家庄有机农场"
                    ],
                    "ip": "www.fmbj.com.cn",
                    "onlineStatus": 0,
                    "icon": "iconfont icon-fanmihezi",
                    "gps": {
                        "latitude": null,
                        "longitude": null
                    },
                    "type": {
                        "typeId": "09",
                        "typeDescription": "协调器设备"
                    },
                    "uuid": "wf-szjj-004",
                    "parentId": "10114",
                    "statusId": "0000",
                    "children": [],
                    "shortAddr": "0000",
                    "name": "孙家庄有机农场",
                    "host": {
                        "09": [
                            "_1538121608237"
                        ]
                    },
                    "location": null,
                    "id": "_1538121608237"
                },
                {
                    "owner": "administrator",
                    "devStatus": 0,
                    "comments": "孙家庄有机农场环境控制中心",
                    "manager": [],
                    "dependsOn": [
                        "孙家庄有机农场环境控制中心"
                    ],
                    "ip": "www.fmbj.com.cn",
                    "onlineStatus": 0,
                    "icon": "iconfont icon-fanmihezi",
                    "gps": {
                        "latitude": null,
                        "longitude": null
                    },
                    "type": {
                        "typeId": "09",
                        "typeDescription": "协调器设备"
                    },
                    "uuid": "wf-szjj-002",
                    "parentId": "10114",
                    "statusId": "64",
                    "children": [{
                        "owner": "administrator",
                        "devStatus": 0,
                        "comments": "087c5800",
                        "manager": [],
                        "dependsOn": [
                            "lu18-基站"
                        ],
                        "onlineStatus": 0,
                        "icon": "iconfont icon-fanmiluyouqi",
                        "gps": {
                            "latitude": null,
                            "longitude": null
                        },
                        "type": {
                            "typeId": "07",
                            "typeDescription": "路由设备"
                        },
                        "uuid": "wf-szjj-002",
                        "parentId": "4C016537DE4768",
                        "statusId": "64",
                        "children": [{
                                "deviceTypeId": "34",
                                "devStatus": 0,
                                "onlineStatus": 0,
                                "icon": "iconfont icon-fengsu1",
                                "terminalId": "10962",
                                "type": {
                                    "typeId": "SENSOR",
                                    "typeDescription": "风速传感器"
                                },
                                "uuid": "wf-szjj-002",
                                "deviceId": "C2016537E001D1",
                                "lastCollectDate": 1540003974021,
                                "deviceNum": "08",
                                "partyTypeId": "SENSOR",
                                "shortAddr": "087c5800",
                                "host": {
                                    "SENSOR": [
                                        "C2016537E001D108"
                                    ]
                                },
                                "id": "C2016537E001D108",
                                "owner": "administrator",
                                "comments": "087c5800",
                                "manager": [],
                                "dependsOn": [
                                    "lu18-基站-风速"
                                ],
                                "module": "00",
                                "sensorDetail": [{
                                    "unit": "km/h",
                                    "expression": "((X1 * 256) + X2)/10.0",
                                    "description": "风速",
                                    "typeStep": 1,
                                    "maxRange": "100",
                                    "seqId": 1,
                                    "minRange": "0"
                                }],
                                "gps": {
                                    "latitude": null,
                                    "longitude": null
                                },
                                "technos": [
                                    "34",
                                    "风速传感器"
                                ],
                                "parentId": "C2016537E001D1",
                                "recentData": "8.9",
                                "statusId": "64",
                                "name": "lu18-基站-风速",
                                "location": null,
                                "deviceTypeDescription": "FM-001-风速传感器",
                                "sensorTypeId": "06"
                            },
                            {
                                "deviceTypeId": "3D",
                                "devStatus": 0,
                                "onlineStatus": 0,
                                "icon": "iconfont icon-fengxiang",
                                "terminalId": "10961",
                                "type": {
                                    "typeId": "SENSOR",
                                    "typeDescription": "风向传感器"
                                },
                                "uuid": "wf-szjj-002",
                                "deviceId": "C2016537E001D1",
                                "lastCollectDate": 1540003963708,
                                "deviceNum": "04",
                                "partyTypeId": "SENSOR",
                                "shortAddr": "087c5800",
                                "host": {
                                    "SENSOR": [
                                        "C2016537E001D104"
                                    ]
                                },
                                "id": "C2016537E001D104",
                                "owner": "administrator",
                                "comments": null,
                                "manager": [],
                                "dependsOn": [
                                    "lu18-基站-风向"
                                ],
                                "module": "00",
                                "sensorDetail": [{
                                    "unit": "方位",
                                    "expression": "((X1 * 256) + X2)/10.0",
                                    "description": "风向",
                                    "typeStep": 1,
                                    "maxRange": "360",
                                    "seqId": 1,
                                    "minRange": "0"
                                }],
                                "gps": {
                                    "latitude": null,
                                    "longitude": null
                                },
                                "technos": [
                                    "3D",
                                    "风向传感器"
                                ],
                                "parentId": "C2016537E001D1",
                                "recentData": "90",
                                "statusId": "64",
                                "name": "lu18-基站-风向",
                                "location": null,
                                "deviceTypeDescription": "FM-001-风向传感器",
                                "sensorTypeId": "14"
                            },
                            {
                                "deviceTypeId": "33",
                                "devStatus": 0,
                                "onlineStatus": 0,
                                "icon": "iconfont icon-kongqiwenshidu1",
                                "terminalId": "10960",
                                "type": {
                                    "typeId": "SENSOR",
                                    "typeDescription": " 空气温湿度传感器"
                                },
                                "uuid": "wf-szjj-002",
                                "deviceId": "C2016537E001D1",
                                "lastCollectDate": 1540003953396,
                                "deviceNum": "02",
                                "partyTypeId": "SENSOR",
                                "shortAddr": "087c5800",
                                "host": {
                                    "SENSOR": [
                                        "C2016537E001D102"
                                    ]
                                },
                                "id": "C2016537E001D102",
                                "owner": "administrator",
                                "comments": null,
                                "manager": [],
                                "dependsOn": [
                                    "lu18-基站-空气温湿度"
                                ],
                                "module": "00",
                                "sensorDetail": [{
                                        "unit": "℃",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "温度",
                                        "typeStep": 1,
                                        "maxRange": "70",
                                        "seqId": 1,
                                        "minRange": "-30"
                                    },
                                    {
                                        "unit": "%",
                                        "expression": "((X1 * 256) + X2)/10.0",
                                        "description": "湿度",
                                        "typeStep": 1,
                                        "maxRange": "100",
                                        "seqId": 2,
                                        "minRange": "0"
                                    }
                                ],
                                "gps": {
                                    "latitude": null,
                                    "longitude": null
                                },
                                "technos": [
                                    "33",
                                    " 空气温湿度传感器"
                                ],
                                "parentId": "C2016537E001D1",
                                "recentData": "16,63.3",
                                "statusId": "64",
                                "name": "lu18-基站-空气温湿度",
                                "location": null,
                                "deviceTypeDescription": "FM-001-百叶窗空气温湿度传感器",
                                "sensorTypeId": "05"
                            },
                            {
                                "deviceTypeId": "3F",
                                "devStatus": 0,
                                "onlineStatus": 0,
                                "icon": "iconfont icon-guangzhao",
                                "terminalId": "10959",
                                "type": {
                                    "typeId": "SENSOR",
                                    "typeDescription": "光照传感器"
                                },
                                "uuid": "wf-szjj-002",
                                "deviceId": "C2016537E001D1",
                                "lastCollectDate": 1540003324354,
                                "deviceNum": "01",
                                "partyTypeId": "SENSOR",
                                "shortAddr": "087c5800",
                                "host": {
                                    "SENSOR": [
                                        "C2016537E001D101"
                                    ]
                                },
                                "id": "C2016537E001D101",
                                "owner": "administrator",
                                "comments": "087c5800",
                                "manager": [],
                                "dependsOn": [
                                    "lu18-基站-光照"
                                ],
                                "module": "00",
                                "sensorDetail": [{
                                    "unit": "KLux",
                                    "expression": "((X1 * 256) + X2)/10.0",
                                    "description": "光照",
                                    "typeStep": 1,
                                    "maxRange": "200",
                                    "seqId": 1,
                                    "minRange": "0"
                                }],
                                "gps": {
                                    "latitude": null,
                                    "longitude": null
                                },
                                "technos": [
                                    "3F",
                                    "光照传感器"
                                ],
                                "parentId": "C2016537E001D1",
                                "recentData": "21.1",
                                "statusId": "64",
                                "name": "lu18-基站-光照",
                                "location": null,
                                "deviceTypeDescription": "FM-001-光照传感器",
                                "sensorTypeId": "00"
                            }
                        ],
                        "shortAddr": "087c5800",
                        "name": "lu18-基站",
                        "host": {
                            "07": [
                                "C2016537E001D1"
                            ]
                        },
                        "location": null,
                        "id": "C2016537E001D1"
                    }],
                    "shortAddr": "0000",
                    "name": "孙家庄有机农场环境控制中心",
                    "host": {
                        "09": [
                            "4C016537DE4768"
                        ]
                    },
                    "location": "孙家庄有机农场",
                    "id": "4C016537DE4768"
                }
            ],
            "name": "孙家庄有机农场",
            "icon": "iconfont icon-fanmichangjing",
            "host": {
                "SCENE": [
                    "10114"
                ]
            },
            "id": "10114",
            "type": {
                "typeId": "SCENE",
                "typeDescription": "场景"
            },
            "parentId": "10064"
        }
    ],
    "name": "山东神州姜窖农业科技有限公司",
    "host": {
        "AGR_COMPANY": [
            "10064"
        ]
    },
    "id": "10064"

};

let tree = d3.tree().nodeSize([dx, dy]);
let diagonal = d3.linkHorizontal().x(d => d.y).y(d => d.x);

let initchart = () => {
    const root = d3.hierarchy(data);

    root.x0 = dy / 2;
    root.y0 = 0;
    root.descendants().forEach((d, i) => {
        d.id = i;
        d._children = d.children;
        if (d.depth && d.data.name.length !== 7) d.children = null;
    });

    // const svg = d3.create("svg")
    const svg = d3.select('#chart').append("svg")
        .attr("width", 900 || width)
        .attr("height", 900)
        // .attr("height", dx)
        .attr("viewBox", [-margin.left, -margin.top, width, dx])
        .style("font", "10px sans-serif")
        .style("user-select", "none");

    const gLink = svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "#555")
        .attr("stroke-opacity", 0.4)
        .attr("stroke-width", 1.5);

    const gNode = svg.append("g")
        .attr("cursor", "pointer");

    function update(source) {
        const duration = d3.event && d3.event.altKey ? 2500 : 250;
        const nodes = root.descendants().reverse();
        const links = root.links();

        // Compute the new tree layout.
        tree(root);

        let left = root;
        let right = root;
        root.eachBefore(node => {
            if (node.x < left.x) left = node;
            if (node.x > right.x) right = node;
        });

        const height = right.x - left.x + margin.top + margin.bottom;

        const transition = svg.transition()
            .duration(duration)
            .attr("height", height)
            .attr("viewBox", [-margin.left, left.x - margin.top, width, height])
            .tween("resize", window.ResizeObserver ? null : () => () => svg.dispatch("toggle"));

        // Update the nodes…
        const node = gNode.selectAll("g")
            .data(nodes, d => d.id);

        // Enter any new nodes at the parent's previous position.
        const nodeEnter = node.enter().append("g")
            .attr("transform", d => `translate(${source.y0},${source.x0})`)
            .attr("fill-opacity", 0)
            .attr("stroke-opacity", 0)
            .on("click", d => {
                d.children = d.children ? null : d._children;
                update(d);
            });

        nodeEnter.append("circle")
            .attr("r", 4.5)
            .attr("fill", d => d._children ? "#555" : "#999");

        nodeEnter.append("text")
            .attr("dy", "0.31em")
            .attr("x", d => d._children ? -6 : 6)
            .attr("text-anchor", d => d._children ? "end" : "start")
            .text(d => d.data.name)
            .clone(true).lower()
            .attr("stroke-linejoin", "round")
            .attr("stroke-width", 3)
            .attr("stroke", "white");

        // Transition nodes to their new position.
        const nodeUpdate = node.merge(nodeEnter).transition(transition)
            .attr("transform", d => `translate(${d.y},${d.x})`)
            .attr("fill-opacity", 1)
            .attr("stroke-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        const nodeExit = node.exit().transition(transition).remove()
            .attr("transform", d => `translate(${source.y},${source.x})`)
            .attr("fill-opacity", 0)
            .attr("stroke-opacity", 0);

        // Update the links…
        const link = gLink.selectAll("path")
            .data(links, d => d.target.id);

        // Enter any new links at the parent's previous position.
        const linkEnter = link.enter().append("path")
            .attr("d", d => {
                const o = {
                    x: source.x0,
                    y: source.y0
                };
                return diagonal({
                    source: o,
                    target: o
                });
            });

        // Transition links to their new position.
        link.merge(linkEnter).transition(transition)
            .attr("d", diagonal);

        // Transition exiting nodes to the parent's new position.
        link.exit().transition(transition).remove()
            .attr("d", d => {
                const o = {
                    x: source.x,
                    y: source.y
                };
                return diagonal({
                    source: o,
                    target: o
                });
            });

        // Stash the old positions for transition.
        root.eachBefore(d => {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }

    svg.node().update = update;

    update(root);

    return svg.node();
}

let chart = initchart();
chart.update();