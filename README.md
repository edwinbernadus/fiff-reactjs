# starter-template-react-js

## Getting Started
** read this first **  
https://github.com/edwinbernadus/starter-template-frontend-framework

## How to Build

*dev mode*  
npm run start  

*production mode*  
npm run build 
## Snippet List
- hint_create_button
````javascript
{/*hint_create_button*/}
<Link to="/list-file">
    <button style={{marginBottom:"20px"}}>
        Go to List Page
    </button>
</Link>
````
- hint_open_new_page
````javascript
{/*hint_open_new_page*/}
<Link to="/list-file">
    <button style={{marginBottom:"20px"}}>
        Go to List Page
    </button>
</Link>
````
- hint_loading_webservice
````javascript
// hint_loading_webservice
let url = "https://jsonplaceholder.typicode.com/albums"
let output = await axios.get(url)
````
- hint_show_loading_indicator
````javascript
// hint_show_loading_indicator
this.setState({
    loading_progress : "loading"
});
````
- hint_show_webservice_result_on_list
````javascript
// hint_show_webservice_result_on_list
const items = this.state.repo_items.map((todo, index) =>
    <li key={index} style={{marginBottom:"3px"}}>
        {todo.id} - {todo.title} -
        {/*hint_button_on_list*/}
        <button onClick={ () => this.buttonClicked(todo) } style={{marginLeft:"10px"}}>
            Inquiry Detail
        </button>

    </li>
);
return items
````
- hint_button_on_list
````javascript
{/*hint_button_on_list*/}
<button onClick={ () => this.buttonClicked(todo) } style={{marginLeft:"10px"}}>
    Inquiry Detail
</button>
````
- hint_show_detail_item_on_alert
````javascript
// hint_show_detail_item_on_alert
alert(item.id + " - " + item.title)
````