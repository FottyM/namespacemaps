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

}

const mapDispacthToProps = (dispatch) => {

}

export default connect(mapDispacthToProps, mapStateToProps)(Form)

