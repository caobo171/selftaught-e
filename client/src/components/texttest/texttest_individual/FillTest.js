import React , {Component} from 'react';
import _ from 'lodash';
import uuid from 'uuid';
import AutosizeInput from 'react-input-autosize';

class FillTest extends Component {
   
   constructor(props){
       super(props)

       this.state={
          values:[],
          colorGreen:"",
          colorRed:"",
          typing: false
       }

   }

   onChange(i,e){
       this.setState({
           values:{...this.state.values, [i] : e.target.value}
       })
   }

   async onSubmit(e){
       e.preventDefault();
       await this.setState({
           colorGreen:"green",
           colorRed:"red",
           typing:true
       });
       console.log(this.state)
    //    let count
    //    for(count=0; count<this.props.test.keys.length; count++){          
    //      if(_.trim(this.props.test.keys[count])===_.trim(this.state.values[count*2+1])){
    //          this.setState({color:""})
    //      }else{
    //         this.setState({color:"green"})
    //      }
    //    }
   }

     renderContent(){
         console.log(this.props.test);
         if(this.props.test.keys){
            const Data = _(this.props.test.content).split('/').value();
            console.log(this.state)
             return _.map(Data,(data,i)=>{
                 if(_.startsWith(data, '*')){
                    data= _.replace(data,'*','');
                        if(_.trim(this.props.test.keys[_.floor(i/2)])===_.trim(this.state.values[i])){
                            console.log(this.props.test.keys[_.floor(i/2)]+ '====='+this.state.values[i])
                            return(
                                <AutosizeInput  
                                    style={{color:this.state.colorGreen}}
                                    className='input'
                                    key={i}          
                                    name={this.state.values[i]}
                                    placeholder = {data}
                                    onChange={(event) => this.onChange(i, event)}
                                    value={this.state.values[i]}
                                    readOnly={this.state.typing}
                                 />
                            )
                        }else{
                            return(
                                <AutosizeInput  
                                    style={{color:this.state.colorRed}}
                                    className='input'
                                    key={i}          
                                    name={this.state.values[i]}
                                    placeholder = {data}
                                    onChange={(event) => this.onChange(i, event)}
                                    value={this.state.values[i]}
                                    readOnly={this.state.typing}
                                 />
                            )
                        }
                    }else{
                        return(
                            <span key={uuid()}>{data}</span>
                        )
                    }
                })   
         } else{
             console.log('fail')
         }
        
    }
    render(){
        const {title} = this.props.test;
        return(
            <div className="card">
                <div className="card-content">
                    <div className="card-title">{title}</div>
                    <form onSubmit={this.onSubmit.bind(this)}>
                   {this.renderContent()}
                   <input
                    type="submit"
                    className="btn teal"
                    value="Submit"
                   />
                    </form>
                   
                </div>
               </div>
        )
    }
}

export default FillTest;