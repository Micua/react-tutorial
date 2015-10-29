// var Chatroom = React.createClass({
//
//     render: function() {
//         return (
//             <div className="container">
//                 <h1 className="page-header">this.props.name</h1>
//                 <p>this is react chatroom! </p>
//             </div>
//         );
//     }
//
// });
//
/**
 * 聊天室组件类型
 */
class Chatroom extends React.Component {
    // constructor(p) {
    //     super();
    //     // this.p = p;
    // }
    render() {
        return (
            /* jshint ignore:start */
            <div className="container">
                <h1 className="page-header">{this.props.name} <a href="#{this.props.id}">#{this.props.id}</a></h1>
                <p>this is react chatroom! </p>
                <ChatList></ChatList>
                <ChatForm></ChatForm>
            </div>
            /* jshint ignore:end */
        );
    }
}

/**
 * 聊天室组件列表
 */
class ChatList extends React.Component {
    render() {
        return (
            /* jshint ignore:start */
            <ul>
                <Message author="iceStone">###### Hello world</Message>
            </ul>
            /* jshint ignore:end */
        );
    }
}
/**
 * 消息实体
 */
class Message extends React.Component {
    raw(md) {
        var html = marked(md, {sanitize: true});
        return { __html: html };
    }
    render() {
        return (
            /* jshint ignore:start */
            <li>
                <h4>{this.props.author}</h4>
                <pre dangerouslySetInnerHTML={this.raw(this.props.children)}></pre>
                <hr/>
            </li>
            /* jshint ignore:end */
        );
    }
}
/**
 * 聊天室组件列表
 */
class ChatForm extends React.Component {
    render() {
        return (
            /* jshint ignore:start */
            <form action="#">
                <legend>Action</legend>
                <div className="form-group">
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        className="form-control"
                        rows="8"
                        placeholder="What do you want to say?">
                    </textarea>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <label htmlFor="name" className="sr-only">Username</label>
                        <input type="text" id="name" className="form-control" placeholder="input you name" value="iceStone" readOnly/>
                    </div>
                    <div className="col-md-8">
                        <button className="btn btn-primary btn-large btn-block">SEND</button>
                    </div>
                </div>
            </form>
            /* jshint ignore:end */
        );
    }
}

/* jshint ignore:start */
var root = <Chatroom id="007" name="React Chatroom"></Chatroom>;
/* jshint ignore:end */

ReactDOM.render(root, document.querySelector('#content'), function () {
    console.log('root element is ready!');
});
