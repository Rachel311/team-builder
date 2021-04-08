import React from 'react';

function Form(props) {
    const { values, onChange, onSubmit } = props
    console.log(values);

    return (
        <div>
    
          <form onSubmit={onSubmit}>
              <div>
               <label> First Name 
                <input 
                 type="text"
                 name="first_name"
                 placeholder='enter your first name'
                 onChange={onChange}
                 value={values.first_name}
               />
               </label>
    
                <label> Last name
                    <input
                    type='text'
                    name='last_name'
                     placeholder='enter your last name'
                    onChange={onChange}
                    value={values.last_name}
    
                    />
                </label>
    
               <label> Email 
                  <input 
                  type="email"
                  name="email"
                  placeholder='type your email'
                  onChange={onChange}
                  value={values.email}
                />
               </label>  
    
               <div>
                  <label> Title
                    <select name="Title" onChange={onChange} value={values.title}>
                      <option value="">---Select One---</option>
                      <option value="Data_Science">Data_Science</option>
                      <option value="Project_Manager">Project_Manager</option>
                      <option value="Ux_Designer">Ux_Designer</option>
                    </select>
                  </label>
                </div>
    
            <div>
                <button> Submit </button>
            </div>
            
             
              </div>
            
          </form>
        </div>
      )
    }


export default Form