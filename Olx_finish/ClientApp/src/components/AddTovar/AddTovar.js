import React, { Component } from 'react';

export class AddTovar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      tovar:{
        name: '',
        cost: 0,
        description: '',
        cat: ''
      }
    };
  }
 
  componentDidMount() {
      fetch('https://localhost:44318/api/Olx/')
      .then(response => response.json())
      .then(categories => {
          console.log('---server reesponse---', categories);
          this.setState({ categories: categories })
          });
  }

  onclick(){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tovar: this.state.tovar })
    };
    fetch('https://localhost:44318/api/Olx/AddTovar', requestOptions);
      console.log(requestOptions);
          // .then(response => response.json())
          // .then(data => this.setState({ postId: data.id }));
  }

  render () {
    const categories = this.state.categories;
        const listCat = categories.map((cat) => {
                const El = <option value={cat.name}>{cat.name}</option>
        return El; 
      });

    return (
      <div class="container">
      <section class="panel panel-default">
        <form action="designer-finish.html" class="form-horizontal" role="form">
          <div class="form-group">
            <h3 className="text-center text-muted ">Подати оголошення</h3>
            <hr/>
            <label for="name" class="col-sm-3 control-label text-muted">Назва товару</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" name="name" id="name" placeholder="Назва"></input>
            </div>
          </div> 
          <div class="form-group">
            <label for="about" class="col-sm-3 control-label text-muted">Опис</label>
            <div class="col-sm-9">
              <textarea class="form-control"></textarea>
            </div>
          </div>  
          <div class="form-group">
            <label for="name" class="col-sm-3 control-label text-muted">Ціна</label>
            <div class="col-sm-9">
              <input type="text" class="form-control" name="name" id="name" placeholder="Ціна"></input>
            </div>
          </div> 
          <div class="form-group">
            <label for="tech" class="col-sm-3 control-label text-muted">Категорія</label>
            <div class="col-sm-3">
              <select class="form-control">
                <option value="" text-muted>Виберіть</option>
                {listCat}
              </select>
            </div>
            <hr/>
          </div> 
          <div class="form-group">
            <label for="name" class="col-sm-3 control-label text-muted">Фото</label>
            <div className="d-flex justify-content-center">
              <input type="file" name="file_img"></input>
              <input type="file" name="file_img"></input>
              <input type="file" name="file_img"></input>
            </div>
          </div> 
          <hr/>
          <div class="form-group">
            <div class="col-sm-offset-3 col-sm-9">
              <button type="submit" class="btn btn-primary" onClick={this.onclick}>Подати оголошення</button>
            </div>
          </div> 
        </form>
    </section>
    </div>
    );
  }
}
