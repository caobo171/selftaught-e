import React, {Component} from 'react';
import _ from 'lodash';
import AutosizeInput from 'react-input-autosize';

import data from '../fake_data/texttestData';

class TextTest extends Component {

    Data = _(data.texttest_data).split('/').value();
    
    disPlay(){
     return _.map(this.Data, (data)=>{
         if(_.startsWith(data, '*')){
            data= _.replace(data,'*','');
            return(
                //<span dangerouslySetInnerHTML={{ __html: `<input class="hello" type="text" placeholder="${data}" >` }} />
                <AutosizeInput             
                    name="form-field-name"
                    placeholder = {data}
                 />
            )
         }

        })
    }   
    render(){
        return(
           <div>
                 <div>{this.Data}</div>
                 <hr/>
                {this.disPlay()}            
            </div>
        )
    }

    
}

export default TextTest;