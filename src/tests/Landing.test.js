import { expect } from "@jest/globals";
import { useNavigation } from '@react-navigation/native';
import Landing from "../containers/Landing";

// const navigation = {
//     navigate: jest.fn()
// }

const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

const tree = create(<Landing navigation = {navigation}/>)

test('navigate to Search screen', () => {
    const button = tree.root.findByProps({testID:'myButton'}).props;
    button.onPress();

    expect(navigation.navigate).toBeCalledWith('Search')
})