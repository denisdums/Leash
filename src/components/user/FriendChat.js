import {
    Image,
    Text,
    View,
    StyleSheet,
    TextInput,
    Pressable,
    ScrollView, ActivityIndicator, KeyboardAvoidingView, SafeAreaView, Keyboard
} from "react-native";
import {colors, fontStyles, globalStyles} from "../../../assets/styles/styles";
import {useContext, useEffect, useRef, useState} from "react";
import {StoreContext} from "../../contexts/StoreContext";
import userService from "../../../services/user.service";
import Icon from "../Icon";
import supabase from "../../../config/supabaseConfig";

export default function FriendChat({navigation, route: {params: {user}}}) {
    const [chats, setChats] = useState([]);
    const [message, setMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false);
    const store = useContext(StoreContext);
    const loggedUser = store.user;
    const scrollViewRef = useRef();

    if (!user) return null;

    useEffect(() => {
        /***
         * Fetches all messages between logged user and selected user
         */
        updateChats();
        /***
         * Subscribes to channel to listen for new messages
         */
        const userMessages = supabase.channel('custom-insert-channel')
            .on('postgres_changes', {event: 'INSERT', schema: 'public', table: 'userMessages'}, (payload) => {
                    /***
                     * If new message is not from logged user or selected user, return
                     */
                    if (payload.new.sender !== loggedUser.userUID && payload.new.sender !== user.userUID) return;
                    /***
                     * Updates chats
                     */
                    updateChats();
                }
            )
            .subscribe()

        return async () => {
            /***
             * Unsubscribes from channel
             */
            await userMessages.unsubscribe()
        }
    }, []);
    /***
     * Returns View component with user image and name
     */
    return (
        <SafeAreaView style={{flex: 1}}>
            <KeyboardAvoidingView style={{...globalStyles.container, ...{flex: 1}}}
                                  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <View style={{flex: 1}}>
                    <ScrollView style={{flex: 1}} ref={scrollViewRef}
                                onContentSizeChange={() => scrollViewRef.current.scrollToEnd({animated: true})}>
                        <View>
                            <View style={styles.header.wrapper}>
                                <Image source={{uri: user.userImage}} style={styles.header.image}/>
                                <View>
                                    <Text>Messages avec</Text>
                                    <Text style={{...fontStyles.heading}}>{user.name} & {user.petName}</Text>
                                </View>
                            </View>

                            <View style={styles.messages.messagesWrapper}>
                                {chats.length > 0 && chats.map((chat, index) => (
                                    <View key={index}
                                          style={{...styles.messages.messageOuterBox, ...(chat.sender === loggedUser.userUID ? styles.messages.myMessageOuterBox : {})}}>
                                        <View
                                            style={styles.messages.messageBox}>
                                            <Text
                                                style={{...styles.messages.message, ...(chat.sender === loggedUser.userUID ? styles.messages.myMessage : {})}}>
                                                {chat.content}
                                            </Text>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.messageBar.container}>
                        <TextInput placeholder="Message" value={message}
                                   style={styles.messageBar.input}
                                   onChangeText={(value) => setMessage(value)}/>
                        <Pressable onPress={handleSubmitMessage} style={{width: 24, height: 24}}>
                            {sendingMessage ? <ActivityIndicator/> : <Icon name="send" isActive={true}/>}
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )

    function handleSubmitMessage() {
        setSendingMessage(true)
        userService.sendMessage(user.userUID, message).then(({data: sendMessage, error}) => {
            if (!error) {
                setMessage('');
                setSendingMessage(false)
                Keyboard.dismiss();
            }
        });
    }

    function updateChats() {
        userService.getMessages(user.userUID).then(({data, error}) => {
            if (!error) {
                setChats(data);
            }
        });
    }
}


const styles = StyleSheet.create({
    header: {
        wrapper: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        image: {
            width: 70,
            height: 70,
            borderRadius: 60,
            marginRight: 8,
        }
    },
    messages: {
        messagesWrapper: {
            height: '90.5%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingTop: 16,
            paddingBottom: 16,
        },
        messageOuterBox: {
            display: 'flex',
            paddingVertical: 8,
        },
        myMessageOuterBox: {
            alignSelf: 'flex-end',
        },
        messageBox: {
            display: 'flex',
            flexDirection: 'row',
            borderRadius: 8,
            overflow: 'hidden',
        },
        message: {
            paddingVertical: 8,
            paddingHorizontal: 16,
            backgroundColor: colors.greyTone,
        },
        myMessage: {
            backgroundColor: colors.purple,
            color: colors.white,

        },
    },
    messageBar: {
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            backgroundColor: colors.white,
            borderRadius: 8,
            marginBottom: 16,
            shadowOffset: {
                width: 0,
                height: -2,
            },
        },
        input: {
            flex: 1,
            paddingVertical: 16,
        }
    }
});