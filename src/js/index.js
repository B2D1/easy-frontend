import '../css/index.scss';
import '../css/index.less';

// 动态加载
const btn = document.getElementById('btn');
btn.onclick = () => {
  import(/* webpackChunkName: "dynamic" */ './dynamic').then((module) => {
    const fn = module.default;
    fn();
  });
};

// 热更替
if (module.hot) {
  module.hot.accept();
}
