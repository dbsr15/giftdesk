function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",

    {
        cardsData: [
            {
                id: 1,
                title: "Cake+money plant",
                //summary: "The dog that drinks milk",
                classNames: "",
                imgSrc: "img/Combos/cake+money-plant1.jpg" },

            {
                id: 2,
                title: "money plant+sweets",
                //summary: "The dog that drinks milk",
                classNames: "",
                imgSrc: "img/Combos/moneyplant+sweets1.jpg" },

            {
                id: 3,
                title: "Mini garden or plant buckets",
                //summary: "Like how Steve Jobs explained it",
                classNames: "",
                imgSrc: "img/Combos/Mini-garden-or-plant-buckets.jpg" }] });_defineProperty(this, "onClickCard",



    id => {
        const updatedData = this.state.cardsData.map(x => {
            if (x.id === id) {
                x.classNames = "dismiss-card";
            }

            return x;
        });

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


                    React.createElement("p", null, "Vivamus cursus enim id elit suscipit iaculis. Proin at ligula vitae leo aliquet fermentum. Nam vitae pulvinar mi, in venenatis tortor. Donec pharetra maximus lobortis."))));






        return (
            React.createElement(React.Fragment, null,
                React.createElement("div", { className: "card-grid" },
                    cards)));



    }}



ReactDOM.render(React.createElement(App, null), document.querySelector("#root"));