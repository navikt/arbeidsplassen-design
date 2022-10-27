import PropTypes from "prop-types";
import classNames from "classnames";

function List({ children, type, className }) {
    const ListType = type;
    return <ListType className={classNames("list", className)}>{children}</ListType>;
}

List.defaultProps = {
    className: undefined,
    type: "ul",
};

List.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(["ul", "ol"]),
};

export default List;
