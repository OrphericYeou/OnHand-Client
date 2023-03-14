import HomeStack from '../navigation/stacks/home-stack'
import AuthStack from '../navigation/stacks/auth-stack'
import { useState } from 'react'


 const MainNavigator = props => {
    const [currentStack, setCurentStack] = useState(0)

    if (currentStack == 0){
        return <AuthStack/>
    }
    else if (currentStack == 1){
        return <HomeStack />
    }
    
}

export default MainNavigator;