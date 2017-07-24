function postanswer(){
json = {
   "_id":0,
   "examinationId":100000,
   "userId":0,
   "username":"s3",
   "unitResults":[
      {
         "unitId":101000,
         "questionResults":[
            {
               "timeUsed":6020,
               "questionId":101010,
               "checkAnswer":localStorage.one,
                //第一题 array0
               "supportDatas":[

               ],
               "records":{
                  "record":[

                  ]
               }
            }
         ]
      },
      {
         "unitId":102000,
         "questionResults":[
            {
               "timeUsed":400,
               "questionId":6,
               "checkAnswer":0,
               "multiDropDownAnswer":{
                    "index":[
                        JSON.parse(localStorage.getItem("two")).q1,
                      JSON.parse(localStorage.getItem("two")).q2
                    ]
                },
               "supportDatas":[

               ],
               "records":{
                  "record":[
                      
                  ]
               }
            }
         ]//二题(1) array1
      },
      {
         "unitId":103000,
         "questionResults":[
            {
               "timeUsed":8193,
               "questionId":7,
               "checkAnswer":JSON.parse(localStorage.getItem("three")).daan,           
               "multiDropDownAnswer":{
                  "indexes":[
                  ]
               
               },
               "supportDatas":[
                  {
                     "dataMap":JSON.parse(localStorage.getItem("three")).table[0].dataMap
                  },
                  {
                     "dataMap":JSON.parse(localStorage.getItem("three")).table[1].dataMap
                  }
               ],
               "records":{
                  "record":[

                  ]
               }
            }
         ]//二题(2) array2
      },{
         "unitId":105000,
         "questionResults":[
            {
               "timeUsed":334,
               "questionId":8,
               "checkAnswer":JSON.parse(localStorage.getItem("four")).daan,
               "inputAnswer":JSON.parse(localStorage.getItem("four")).yuanyin,
                "supportDatas":[
                  {
                     "dataMap":JSON.parse(localStorage.getItem("four")).table[0].dataMap
                  },
                  {
                     "dataMap":JSON.parse(localStorage.getItem("four")).table[1].dataMap
                  }
               ],
               "records":{
                  "record":[
                        
                  ]
               }
            }
         ]//二题(3) array3
      },{
         "unitId":105000,
         "questionResults":[
            {
               "timeUsed":334,
               "questionId":102020,
               "checkAnswer":JSON.parse(localStorage.getItem("five")).daan,
               "inputAnswer":JSON.parse(localStorage.getItem("five")).yuanyin,
                "supportDatas":[
                  {
                     "dataMap":JSON.parse(localStorage.getItem("five")).table[0].dataMap
                  },
                  {
                     "dataMap":JSON.parse(localStorage.getItem("five")).table[1].dataMap
                  }
               ],
               "records":{
                  "record":[
                        
                  ]
               }
            }
         ]//二题(4) array4
      },{
         "unitId":105000,
         "questionResults":[
            {
               "timeUsed":334,
               "questionId":9,
               "checkAnswer":JSON.parse(localStorage.getItem("six")).daan,
               "inputAnswer":JSON.parse(localStorage.getItem("six")).yuanyin,
                "supportDatas":[
                  {
                     "dataMap":JSON.parse(localStorage.getItem("six")).table[0].dataMap
                  },
                  {
                     "dataMap":JSON.parse(localStorage.getItem("six")).table[1].dataMap
                  }
               ],
               "records":{
                  "record":[
                        
                  ]
               }
            }
         ]//二题(5) array5
      },{
         "unitId":105000,
         "questionResults":[
            {
               "timeUsed":334,
               "questionId":105050,
               "checkAnswer":JSON.parse(localStorage.getItem("seven")).daan,
               "multiDropDownAnswer":{
                    "index":[
                        JSON.parse(localStorage.getItem("seven")).left,
                        JSON.parse(localStorage.getItem("seven")).right
                    ]
                },
                "supportDatas":[
                 
               ],
               "records":{
                  "record":[
                      
                  ]
               }
            }
         ]//三题
      },{
         "unitId":105000,
         "questionResults":[
            {
               "timeUsed":334,
               "questionId":105050,
               "checkAnswer":JSON.parse(localStorage.getItem("eight")).daan,
               "inputAnswer":JSON.parse(localStorage.getItem("eight")).textarea,
               "multiDropDownAnswer":{
                    "index":[

                    ]
                },
                "supportDatas":[
                  
               ],
               "records":{
                  "record":[
                        
                  ]
               }
            }
         ]//四题
      }
   ]
}

json = JSON.stringify(json);
token = document.cookie;
  $.post("http://47.93.247.181:8090/rest/submit/",
		 {
			 username:'s3',
			 token:token,
			 type:'10',
			 examresult:json
		 }
		)
}