// Icon Library Dependency
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { View, StyleSheet, Pressable } from 'react-native'
// Navigation Dependencies
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParams } from '../../../App';
import { useNavigation } from '@react-navigation/native';

const FilterOverlayButton = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

    return (
        <View style={styles.container}>
            {/* <Pressable onPress={() => navigation.navigate('Filters')}> */}
                <AntDesignIcon name='filter' size={28} />
            {/* </Pressable> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
    }
})

export default FilterOverlayButton;