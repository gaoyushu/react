import React ,{Component} from 'react';
import {NavBar, Icon} from 'antd-mobile'

export default class Mine extends Component{
    render(){
        let mine1 = (
            <NavBar
              style={{ backgroundColor: "#3fcccb", color: "#fff" }}
              rightContent={[
                <Icon
                  key="0"
                  type="ellipsis"
                  style={{ color: "#fff", marginRight: "16px" }}
                />
              ]}
            >
              我的
            </NavBar>
          );
        return(
            <div>
                {mine1}
            </div>
        )
    }
}