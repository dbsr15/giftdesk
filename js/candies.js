function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",

    {
        cardsData: [

            {
                id: 1,
                title: "Cake + candy box",
                //summary: "The dog that drinks milk",
                classNames: "",
                imgSrc: "img/Combos/cake+candybox1.jpg" },

            {
                id: 2,
                title: "Cake + candy box + favorite food or sweets",
                //summary: "Like how Steve Jobs explained it",
                classNames: "",
                imgSrc: "img/Combos/cake+candybox+sweets.jpg" }] });_defineProperty(this, "onClickCard",


    id => {

        this.setState({
            cardsData: updatedData });


        // wait for animation to finish then remove data
        setTimeout(() => {
            const { cardsData } = this.state;

            this.setState({
                cardsData: cardsData.filter(card => card.id !== id) });

        }, 1000);
    });}componentDidMount() {} // dismiss the card upwards

    render() {

        const cards = this.state.cardsData.map((x) =>
            React.createElement("div", { className: `card ${x.classNames}`, onClick: e => this.onClickCard(x.id) },
                React.createElement("div", { className: "card-img" },
                    React.createElement("img", { src: x.imgSrc, alt: "" })),

                React.createElement("div", { className: "card-details" },
                    React.createElement("h3", null, x.title),
                    React.createElement("p", null, x.summary)),
                React.createElement("div", { className: "reveal-details" },
                    React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend urna sapien, id malesuada risus egestas eget. Quisque porttitor, risus at tincidunt fringilla, mauris sem facilisis magna, dictum suscipit lectus odio gravida justo."),


                    React.createElement("p", null, "Integer lacinia dapibus consequat. Phasellus luctus sagittis nunc a pretium. Vivamus lacinia egestas pulvinar. In id cursus lacus. Phasellus et massa est."),


                    React.createElement("p", null, ""))
            ));






        return (
            React.createElement(React.Fragment, null,
                React.createElement("div", { className: "card-grid" },
                    cards)));



    }}



ReactDOM.render(React.createElement(App, null), document.querySelector("#root"));

