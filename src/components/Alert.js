import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        if (typeof word !== 'string' || word.length === 0) {
          return ''; // Return an empty string if word is not a string or is empty
        }  
        const lower = word.toLowerCase(); // Convert the word to lowercase
        return lower.charAt(0).toUpperCase() + lower.slice(1); // Capitalize the first letter and append the rest
      };
  return (
  
    props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
       <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
     </div>
    
  )
}
