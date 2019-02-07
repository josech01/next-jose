import head from 'next/head'
import Navegacion from './navegacion'

const MasterPage = (props) => {
  return ( 
      <div>
        <head>
          <title>Titulo</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css"/>
        </head>

        <Navegacion/>
        {props.children}
      </div>
   );
}
 
export default MasterPage;