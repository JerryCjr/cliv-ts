// 脚手架相关的配置信息
import packageJson from "../package.json";

const cliName = "cliv2";
const requiredVersion = packageJson.engines.node;

const sayHello = () => {
  console.log(1);
};

export { cliName, requiredVersion, sayHello };
