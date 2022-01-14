import { withSearchHOC } from "./HocProducList";
import ProductList from "./ProductList";
import users from './users.json'

const UserSearch = withSearchHOC(ProductList, users)

export default UserSearch