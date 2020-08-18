import React, {Component} from 'react';
import {Link} from "react-router-dom";

const axios = require('axios');

class Pcontent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      domain: 'http://a.itying.com/'
    };
  }

  requestData(id) {

    var api = this.state.domain + 'api/productcontent?id=' + id;
    // {"result":[{"_id":"5ac1a22011f48140d0002955","shop_id":0,"cate_id":"5ac0896ca880f20358495508","catename":"精选热菜","title":"娃娃菜炖豆腐","price":"2","product_bar_code":"6921168550098","num":"10","description":"规格:500ml/瓶","status":"1","is_best":"1","is_hot":"1","content":"<p>娃娃菜富含维生素和硒，叶绿素含量较高，具有丰富的营养价值。娃娃菜还含有丰富的纤维素及微量元素，也有助于预防结肠癌。娃娃菜吃起来口感脆嫩清甜。我们吃娃娃菜喜欢到饭店里吃蒜蓉粉丝娃娃菜，妈妈喜欢做娃娃菜炖豆腐，有一股自然的清香，女儿很喜欢吃姥姥做的，说是好吃又减肥。111</p>","img_url":"upload\\20180417\\1523969206225.jpg","type":"1","sort":"","is_host":1}]}
    axios.get(api)
      .then((response) => {
        console.log(response);

        this.setState({

          list: response.data.result[0]
        })
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  componentWillMount() {

    console.log(this.props.match.params.id)

    let id = this.props.match.params.id;

    this.requestData(id);

  }


  render() {
    return (

      <div className="pcontent">

        <div className="back"><Link to='/'>返回</Link></div>

        <div className="p_content">
          <div className="p_info">
            {this.state.list.img_url ?
              <img alt={this.state.list.title} src={`${this.state.domain}${this.state.list.img_url}`}/> : ""}
            <h2>{this.state.list.title}</h2>
            <p className="price">{this.state.list.price}/份</p>
          </div>
          <div className="p_detial">
            <h3>
              商品详情
            </h3>
            <div className="p_content" dangerouslySetInnerHTML={{__html: this.state.list.content}}>

            </div>
          </div>
        </div>


        <footer className="pfooter">

          <div className="cart">
            <strong>数量:</strong>
            <div className="cart_num">
              <div className="input_left">-</div>
              <div className="input_center">
                <input type="text" readOnly="readonly" value="1" name="num" id="num"/>
              </div>
              <div className="input_right">+</div>
            </div>

          </div>

          <button className="addcart">加入购物车</button>
        </footer>


      </div>
    );
  }
}

export default Pcontent;
