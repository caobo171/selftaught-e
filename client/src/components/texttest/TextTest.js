import React, {Component} from 'react';
import _ from 'lodash';
import AutosizeInput from 'react-input-autosize';
import uuid from 'uuid';

import data from '../../fake_data/texttestData';
import TextTestForm from './TextTestForm';

class TextTest extends Component {
    constructor(props){
        super(props)
        this.state = {
            terms:[] 
        }
    }

    Data = _(data.texttest_data).split('/').value();

    disPlay(){
     return _.map(this.Data, (data)=>{
         if(_.startsWith(data, '*')){
            data= _.replace(data,'*','');
            return(
                //<span dangerouslySetInnerHTML={{ __html: `<input class="hello" type="text" placeholder="${data}" >` }} />
                <AutosizeInput   
                    className='input'
                    key={uuid()}          
                    name="form-field-name"
                    placeholder = {data}
                 />
            )
            }else{
                return(
                    <span key={uuid()}>{data}</span>
                )
            }
            })
    }   
    render(){
        return(
           <div className="container">
              <div className ="card ">
               <div className="card-content">
                 <span className="card-title">Text Test</span>
                 {this.disPlay()}  
                </div>
              </div>    
              <div className ="card ">
               <div className="card-content">
                 <span className="card-title">Text Test Form</span>
                 <TextTestForm />
                </div>
              </div>    
            </div>
        )
    }

    
}

export default TextTest;