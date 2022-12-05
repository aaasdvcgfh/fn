


module.exports = {
    configureWebpack: {
       devServer:{
        proxy:{
            '/api':{
                target:' http://localhost:3000', // http://1.116.64.64:5004/
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
       }
    }
  }


