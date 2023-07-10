import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import NewPost from './pages/NewPost';
import EditPost from './pages/EditPost';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/new-post" exact component={NewPost} />
      <Route path="/edit-post/:id" exact component={EditPost} />
    </Switch>
  );
}
