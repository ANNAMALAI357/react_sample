import React from "react";
import QueryBuilder, { formatQuery } from "react-querybuilder";

// set up the initial fields
const fields = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
  { name: "age", label: "Age" },
  { name: "address", label: "Address" },
  { name: "phone", label: "Phone" },
  { name: "email", label: "Email" },
  { name: "twitter", label: "Twitter" },
  { name: "isDev", label: "Is a Developer?", value: false }
];
const operators = [
  { name: "null", label: "Is Null" },
  { name: "notNull", label: "Is Not Null" },
  { name: "in", label: "In" },
  { name: "notIn", label: "Not In" },
  { name: "=", label: "=" },
  { name: "!=", label: "!=" },
  { name: "<", label: "<" },
  { name: ">", label: ">" },
  { name: "<=", label: "<=" },
  { name: ">=", label: ">=" }
];
const combinators = [
  { name: "and", label: "AND" },
  { name: "or", label: "OR" }
];

const existingQuery = {
  id: "g-qwjn8HiAtZ4-Z9i5Bi2br",
  rules: [
    {
      id: "r-wHzK6u-5a0YBETrkTFj3B",
      field: "firstName",
      value: "Steve",
      operator: "="
    },
    {
      id: "r-ISUlfhfzTULS5LTKjeKUH",
      field: "lastName",
      value: "Vai",
      operator: "="
    }
  ],
  combinator: "and",
  not: false
};

class QBuilder extends React.Component {
  state = {
    queryResults: "",
    setQuery: "",
    rawQuery: ""
  };

  onQueryChange = queryJSON => {
    this.setState({
      queryResults: JSON.stringify(queryJSON, null, 4),
      rawQuery: queryJSON
    });
  };

  loadQuery = () => {
    this.setState({
      setQuery: existingQuery
    });
  };

  buildControls = () => {
    return {};
  };

  buildClasses = () => {
    return {
      queryBuilder: "qb-container", // Root <div> element

      ruleGroup: "rule-group notification", // <div> containing the RuleGroup
      combinators: "select select-combinator", // <select> control for combinators
      addRule: "btn-add-rule button is-info is-small is-rounded", // <button> to add a Rule
      addGroup: "btn-add-group button is-info is-small is-rounded", // <button> to add a RuleGroup
      removeGroup: "button is-danger is-small is-rounded", // <button> to remove a RuleGroup
      notToggle: "label", // <label> on the "not" toggle

      rule: "rule notification", // <div> containing the Rule
      fields: "select select-field", // <select> control for fields
      operators: "select select-operator", // <select> control for operators
      value: "input input-value is-small", // <input> for the field value
      removeRule: "button is-danger is-small is-rounded" // <button> to remove a Rule
    };
  };

  render() {
    return (
      <>
        <div className="buttons">
          <button class="button is-link" onClick={this.loadQuery}>
            Load existing query
          </button>
          <button
            class="button is-dark"
            onClick={() => this.setState({ setQuery: "" })}
          >
            clear query
          </button>
        </div>
        <div className="column">
          <QueryBuilder
            fields={fields}
            operators={operators}
            combinators={combinators}
            onQueryChange={this.onQueryChange}
            controlClassnames={this.buildClasses()}
            showCombinatorsBetweenRules={false}
            query={this.state.setQuery}
          />
        </div>

        <div className="column">
          <div className="notification">
            {this.state.queryResults ? (
              <div>
                <code>
                  <pre>{this.state.queryResults}</pre>
                </code>
              </div>
            ) : (
              <p>...built query will display here</p>
            )}
          </div>
        </div>

        <div className="column">
          <div className="notification">
            {this.state.rawQuery ? (
              <div>
                <code>
                  <pre>{formatQuery(this.state.rawQuery, "sql")}</pre>
                </code>
              </div>
            ) : (
              <p>...built query will display here</p>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default QBuilder;
