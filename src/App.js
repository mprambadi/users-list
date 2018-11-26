import React, { Component } from "react";
import api from "./api";
import Loader from "./component/Loader";
import IconTabs from "./component/Tab";

class App extends Component {
  state = {
    users: [],
    loading: false,
    filter: "",
    loadingMore: false,
    morePage: true,
    file: "",
    value: 0
  };
  componentDidMount() {
    this.fetchUser();
    this.onScroll();
  }

  onScroll = () => {
    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        if (!this.state.morePage) return;
        this.fetchMoreUser();
      }
    };
  };

  fetchUser = () => {
    this.setState({ loading: true }, () =>
      api.get(`/?nat=us&results=12`).then(({ data }) => {
        this.setState({ loading: false, users: data.results });
      })
    );
  };

  fetchMoreUser = async () => {
    this.setState({ loadingMore: true });

    const { data } = await api.get("/?nat=us&results=10");

    this.setState(state => ({
      users: [...state.users, ...data.results],
      loadingMore: false,
      morePage: state.users.length < 100
    }));
  };

  handleChange = (event, value) => {
    this.setState({ value });

    console.log(value);
  };

  renderItem = () => {
    if (this.state.value === 0) {
      return this.renderList();
    }
    if (this.state.value === 1) {
      return <div>halaman 0</div>;
    }
    if (this.state.value === 2) {
      return <div>halaman 2</div>;
    }
  };

  renderList = () => {
    const filter = this.state.users.filter(
      user =>
        [user.name.title, user.name.firstname, user.name.lastname, user.email]
          .join(" ")
          .indexOf(this.state.filter) !== -1
    );

    return (
      <div>
        <input
          name="filter"
          onChange={({ target: { name, value } }) =>
            this.setState({ [name]: value })
          }
          className="form-control mb-2"
        />
        {this.state.loading ? (
          <div>
            {[1, 2, 3, 4, 5, 6, 7, 9, 10].map(id => (
              <Loader key={id} className="m-1" />
            ))}
          </div>
        ) : (
          filter.map(user => (
            <div className="d-flex m-2" key={user.id.value}>
              <div>
                <img
                  src={user.picture.thumbnail}
                  alt={user.name.first}
                  className="rounded-circle mr-2"
                />
              </div>
              <div>{`${user.name.title} ${user.name.first} ${
                user.name.last
              }`}</div>
            </div>
          ))
        )}

        {this.state.loadingMore && <Loader />}
      </div>
    );
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="w-50">
          <IconTabs handleChange={this.handleChange} value={this.state.value}>
            {this.renderItem()}
          </IconTabs>
        </div>
      </div>
    );
  }
}

export default App;
