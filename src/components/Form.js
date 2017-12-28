import React, {Component} from 'react'
import { connect } from 'react-redux'

class Form extends Component{
  render(){
    return(
      <div className="">
        <h1></h1>
          <form action="">
              <label>
                Location
                  <input type="text"/>
              </label>
              <input type="submit" value="ADD TASK"/>
          </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
return{}
}

const mapDispacthToProps = (dispatch) => {
return {}
}

export default connect(mapDispacthToProps, mapStateToProps)(Form)

