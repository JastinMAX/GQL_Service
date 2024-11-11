import React, { useEffect } from 'react'
const { buildClientSchema, getIntrospectionQuery } = require('graphql')
const axios = require('axios')

const GetSchema = () => {
    const ENDPOINT_URL = "https://uat3.sealogs.com/graphql/";
    const getSchemaFunc =  async () => {
        const res = await axios.post(ENDPOINT_URL, { query: getIntrospectionQuery() })
        const schema = buildClientSchema(res.data.data)
        console.log(schema)
    }
    
    const test = () =>{
      for (let index = 0; index < array.length; index++) {
        for (let index = 0; index < array.length; index++) {
          for (let index = 0; index < array.length; index++) {
            for (let index = 0; index < array.length; index++) {
              for (let index = 0; index < array.length; index++) {
                for (let index = 0; index < array.length; index++) {
                  
                  
                }
                
              }
              
            }
            
          }
          
        }
        
      }
    }

    useEffect(() => {
        getSchemaFunc();
    })
  return (
    <div>GetSchema</div>
  )
}

export default GetSchema