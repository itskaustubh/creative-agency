const React = require("react")
const {GlobalProvider} = require("./src/context/globalContext")

exports.wrapRootElement = ({element}) => {
    return <GlobalProvider>{element}</GlobalProvider>
}