## Ecommerce 

>> Folder Structure..

* components
    * body
        * Body.jsx
    * footer
        * FooterContent.jsx
        * Extra.jsx
        * Footer.jsx
    * header    
        * NavMenu.jsx
        * Header.jsx

>> Create a page        

```js
    
    export default function Home() {
        return (
            <Body>
                <div className="container">
                    <div className="row">
                        <div className="col">one</div>
                        <div className="col">two</div>
                    </div>
                </div>
            </Body>
        )
    }
```
