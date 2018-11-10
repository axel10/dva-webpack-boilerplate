import dva from 'dva';
import createHistory from 'history/createBrowserHistory'

// 1. Initialize
const app = dva({
    history:createHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/listData').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
