import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import NewPost from './pages/NewPost';
import EditPost from './pages/EditPost';

export default function Routes() {
  const token = localStorage.getItem('token');

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/blog" exact component={token ? Blog : Home} />
      <Route path="/new-post" exact component={token ? NewPost : Home} />
      <Route path="/edit-post/:id" exact component={token ? EditPost : Home} />

    </Switch>
  );
}
