function postanswer(){
json = {
   "_id":0,
   "examinationId":100000,
   "userId":0,
   "username":localStorage.getItem("userid"),
   "unitResults":[
//      {
//         "unitId":101000,
//         "questionResults":[
//            {
//               "timeUsed":6020,
//               "questionId":101010,
//               "checkAnswer":localStorage.one,
//                //第一题 array0
//               "supportDatas":[
//
//               ],
//               "records":{
//                  "record":[
//
//                  ]
//               }
//            }
//         ]
//      },
      {
         "unitId":102000,
         "questionResults":[
            {
               "timeUsed":JSON.parse(localStorage.getItem("two")).time,
               "questionId":6,
               "checkAnswer":0,
               "multiDropDownAnswer":{
                    "indexes":[
                        parseInt(JSON.parse(localStorage.getItem("two")).q1),
                        parseInt(JSON.parse(localStorage.getItem("two")).q2)
                    ]
                },
               "supportDatas":[

               ],
               "records":{
                  "record":[
                      
                  ]
               }
            },//二题(1) array1,//二题(1) array1
             {
                 "timeUsed":JSON.parse(localStorage.getItem("three")).time,
                 "questionId":7,
                 "checkAnswer":JSON.parse(localStorage.getItem("three")).daan,
                 "multiDropDownAnswer":{
                     "indexes":[
                     ]

                 },
                 "supportDatas":[
                     {
                         "dataMap":JSON.parse(localStorage.getItem("three")).table[0]
                     },
                     {
                         "dataMap":JSON.parse(localStorage.getItem("three")).table[1]
                     }
                 ],
                 "records":{
                     "record":[

                     ]
                 }
             }, //二题(2) array2
             {
                 "timeUsed":JSON.parse(localStorage.getItem("four")).time,
                 "questionId":8,
                 "checkAnswer":JSON.parse(localStorage.getItem("four")).daan,
                 "inputAnswer":JSON.parse(localStorage.getItem("four")).yuanyin,
                 "supportDatas":[
                     {
                         "dataMap":JSON.parse(localStorage.getItem("four")).table[0]
                     },
                     {
                         "dataMap":JSON.parse(localStorage.getItem("four")).table[1]
                     }
                 ],
                 "records":{
                     "record":[

                     ]
                 }
             },//二题(3) array3
             {
                 "timeUsed":JSON.parse(localStorage.getItem("five")).time,
                 "questionId":102020,
                 "checkAnswer":JSON.parse(localStorage.getItem("five")).daan,
                 "inputAnswer":JSON.parse(localStorage.getItem("five")).yuanyin,
                 "supportDatas":[
                     {
                         "dataMap":JSON.parse(localStorage.getItem("five")).table[0]
                     },
                     {
                         "dataMap":JSON.parse(localStorage.getItem("five")).table[1]
                     }
                 ],
                 "records":{
                     "record":[

                     ]
                 }
             }, //二题(4) array4
             {
                 "timeUsed":JSON.parse(localStorage.getItem("six")).time,
                 "questionId":9,
                 "checkAnswer":JSON.parse(localStorage.getItem("six")).daan,
                 "inputAnswer":JSON.parse(localStorage.getItem("six")).yuanyin,
                 "supportDatas":[
                     {
                         "dataMap":JSON.parse(localStorage.getItem("six")).table[0]
                     },
                     {
                         "dataMap":JSON.parse(localStorage.getItem("six")).table[1]
                     }
                 ],
                 "records":{
                     "record":[

                     ]
                 }
             }//二题(5) array5




         ]//二题
      },
      {
         "unitId":103000,
         "questionResults":[
            {
               "timeUsed":JSON.parse(localStorage.getItem("seven")).time,
               "questionId":103030,
               "checkAnswer":JSON.parse(localStorage.getItem("seven")).daan,
               "multiDropDownAnswer":{
                    "indexes":[
                        parseInt(JSON.parse(localStorage.getItem("seven")).left),
                        parseInt(JSON.parse(localStorage.getItem("seven")).right)
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
               "timeUsed":JSON.parse(localStorage.eight).atime,
               "questionId":10,
               "inputAnswer":JSON.parse(localStorage.eight).a1,
               "multiDropDownAnswer":{
                    "indexes":[
                    ]
                },
                "supportDatas":[
                  
               ],
               "records":{
                  "record":[
                        
                  ]
               }
            }, {
               "timeUsed":JSON.parse(localStorage.eight).atime,
               "questionId":11,
               "inputAnswer":JSON.parse(localStorage.eight).a2,
               "multiDropDownAnswer":{
                    "indexes":[
                    ]
                },
                "supportDatas":[
                  
               ],
               "records":{
                  "record":[
                        
                  ]
               }
            },
            {
               "timeUsed":JSON.parse(localStorage.eight).btime,
               "questionId":12,
               "inputAnswer":JSON.parse(localStorage.eight).b1,
               "multiDropDownAnswer":{
                    "indexes":[
                    ]
                },
                "supportDatas":[
                  
               ],
               "records":{
                  "record":[
                        
                  ]
               }
            },{
               "timeUsed":JSON.parse(localStorage.eight).btime,
               "questionId":13,
               "inputAnswer":JSON.parse(localStorage.eight).b2,
               "multiDropDownAnswer":{
                    "indexes":[
                    ]
                },
                "supportDatas":[
                  
               ],
               "records":{
                  "record":[
                        
                  ]
               }
            },
            {
               "timeUsed":JSON.parse(localStorage.eight).ctime,
               "questionId":14,
               "checkAnswer":JSON.parse(localStorage.eight).c,
               "multiDropDownAnswer":{
                    "indexes":[
                    ]
                },
                "supportDatas":[
                  
               ],
               "records":{
                  "record":[
                        
                  ]
               }
            },
            {
               "timeUsed":JSON.parse(localStorage.eight).dtime,
               "questionId":15,
               "checkAnswer":JSON.parse(localStorage.eight).d,
               "multiDropDownAnswer":{
                    "indexes":[
                    ]
                },
                "supportDatas":[
                  
               ],
               "records":{
                  "record":[
                        
                  ]
               }
            },
            {
               "timeUsed":JSON.parse(localStorage.eight).etime,
               "questionId":16,
               "inputAnswer":JSON.parse(localStorage.eight).e1,
               "multiDropDownAnswer":{
                    "indexes":[
                    ]
                },
                "supportDatas":[
                  
               ],
               "records":{
                  "record":[
                        
                  ]
               }
            },{
               "timeUsed":JSON.parse(localStorage.eight).etime,
               "questionId":17,
               "inputAnswer":JSON.parse(localStorage.eight).e2,
               "multiDropDownAnswer":{
                    "indexes":[
                    ]
                },
                "supportDatas":[
                  
               ],
               "records":{
                  "record":[
                        
                  ]
               }
            },
            {
               "timeUsed":JSON.parse(localStorage.eight).ftime,
               "questionId":18,
               "inputAnswer":JSON.parse(localStorage.eight).f1,
               "multiDropDownAnswer":{
                    "indexes":[
                    ]
                },
                "supportDatas":[
                  
               ],
               "records":{
                  "record":[
                        
                  ]
               }
            },{
               "timeUsed":JSON.parse(localStorage.eight).ftime,
               "questionId":19,
               "inputAnswer":JSON.parse(localStorage.eight).f2,
               "multiDropDownAnswer":{
                    "indexes":[
                    ]
                },
                "supportDatas":[
                  
               ],
               "records":{
                  "record":[
                        
                  ]
               }
            },
            {
               "timeUsed":JSON.parse(localStorage.eight).gtime,
               "questionId":18,
                "checkAnswer":JSON.parse(localStorage.eight).g1,
               "inputAnswer":JSON.parse(localStorage.eight).g2,
               "multiDropDownAnswer":{
                    "indexes":[
                    ]
                },
                "supportDatas":[
                  
               ],
               "records":{
                  "record":[
                        
                  ]
               }
            }
         ]
      }
   ]
}

json = JSON.stringify(json);
  $.post("http://47.93.247.181:8092/rest/submit/",
		 {
			 username:localStorage.userid,
			 token:localStorage.token,
			 type:'10',
			 examresult:json
		 },
		  function( data ) {
			  if(data.code==0){
				 alert("提交成功！");
				// window.opener=null;
				  window.location.href="about:blank";
				window.close();
			  }else{
				  alert("提交失败，请重试！");
			  }
		  }
		)
}