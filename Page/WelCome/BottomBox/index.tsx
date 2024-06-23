import React, { useEffect, useRef, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Style } from '../../../Common/styles';
import BackHeader from '../../../Components/Base/BackHeader';
import Button from '../../../Components/Base/Button';
import TextLink from '../../../Components/Base/Text/TextLink';
import { noFunc } from '../../../Common/utils';

const CARD_WIDTH = 345;
type propsType = {}
type CardDataType = {
    title: string,
    selects: string[],
    layout: number[][],
    isMulti?: boolean
}
type CardProps = {
    data: CardDataType,
    selected?: Set<number>
    onSelect?: (index: number) => void
}
const Card = (props: CardProps) => {
    const { data, onSelect = noFunc, selected = new Set() } = props;
    const SelectItem = (props: {
        title: string,
        isSelected?: boolean
        onClick?: () => void
    }) => {
        const { title, onClick = noFunc, isSelected = false } = props
        return <TouchableOpacity
            onPress={onClick}
            style={[
                styles.cardSelectItem,
                isSelected ? styles.cardSelectItemSelect : {}
            ]}
            activeOpacity={1}
        >
            <Text style={{
                fontSize: 16,
                fontWeight: 600
            }}>{title}</Text>
        </TouchableOpacity>
    }
    return <View style={styles.cardContainer}>
        <View style={{ width: CARD_WIDTH, height: 50 }}>
            <Text style={styles.cardText}>{data.title}</Text>
        </View>
        <View style={styles.cardSelect}>
            {/* 行 */}
            {data.layout.map((item, index) =>
                <View
                    key={index}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: CARD_WIDTH,
                        gap: 8
                    }}>
                    {item.map((idx, index) => <SelectItem
                        key={index}
                        onClick={() => {
                            onSelect(idx);
                        }}
                        title={data.selects[idx]}
                        isSelected={Array.from(selected).includes(idx)}
                    ></SelectItem>)}
                </View>
            )}
        </View>
    </View>
}
const BottomBox = (props: propsType) => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const { } = props;

    const [curIndex, setCurIndex] = useState(0);
    const [cardSelects, setCardSelects] = useState<Record<number, Set<number>>>({});
    const [forceUpdate, setForceUpdate] = useState(false);
    const scrollViewRef = useRef<ScrollView>(null);
    const cardList: CardDataType[] = [
        {
            title: '您更倾向于哪种出行方式?',
            selects: ['偏好步行', '偏好驾车', '偏好骑行'],
            layout: [[0], [1], [2]]
        },
        {
            title: '您更倾向于哪种类型的体验？(可多选)',
            selects: ['美食之旅', '感官体验', '市集/工坊', '户外/运动', '沉浸游戏', '静谧时光', '夜间活动'],
            layout: [[0, 1], [2, 3, 4], [5, 6]],
            isMulti: true
        },
        {
            title: '您更倾向于与一群人还是与少数亲友一起度过社交时间？',
            selects: ['我喜欢与三两好友小聚，更放松。', '我喜欢聚会，越热闹越好。'],
            layout: [[0], [1]]
        },
        {
            title: '请选择您所在的年龄段：',
            selects: ['18-24岁', '18岁以下', '25-34岁', '35岁以上'],
            layout: [[0, 1], [2, 3]]
        },
        {
            title: '请选择您的性别：',
            selects: ['男性', '女性', '不方便透露'],
            layout: [[0], [1], [2]]
        }
    ]
    useEffect(() => {
        scrollViewRef?.current?.scrollTo({
            x: CARD_WIDTH * curIndex,
            animated: true
        });
    }, [curIndex])
    return (
        <View style={styles.formContainer}>
            {/* 进度 */}
            <View style={{
                position: 'absolute',
                backgroundColor: "rgba(0, 0, 0, 0.40)",
                width: `${(curIndex + 1) / cardList.length * 120}%`,
                height: 5,
                borderRadius: 5
            }}></View>
            <View style={styles.backContainer}>
                <BackHeader onBack={() => {
                    if (curIndex === 0) return;
                    setCurIndex(curIndex - 1);
                }} style={{
                    marginLeft: 0,
                    display: curIndex === 0 ? 'none' : 'flex'
                }} size={28}></BackHeader>
            </View>
            <View style={styles.swiperContainer}>
                <ScrollView
                    ref={scrollViewRef}
                    horizontal
                    pagingEnabled
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                >
                    {cardList.map((item, index) => {
                        return <View style={{ width: CARD_WIDTH }} key={index}>
                            <Card
                                key={index}
                                selected={cardSelects[index]}
                                data={item}
                                onSelect={(idx) => {
                                    if (!cardSelects[index]) {
                                        cardSelects[index] = new Set();
                                    }
                                    if (item.isMulti) {
                                        if (cardSelects[index].has(idx)) {
                                            cardSelects[index].delete(idx);
                                        } else {
                                            cardSelects[index].add(idx);
                                        }
                                    } else {
                                        cardSelects[index] = new Set([idx]);
                                    }
                                    setCardSelects(cardSelects);
                                    setForceUpdate(!forceUpdate);
                                }}>
                            </Card>
                        </View>
                    })}
                </ScrollView>
            </View>
            <View style={styles.bottomContainer}>
                <Button title='下一步' onClick={() => {
                    if (curIndex >= cardList.length - 1) {
                        return;
                    }
                    setCurIndex(curIndex + 1);
                }}></Button>
                <TextLink content="跳过"></TextLink>
            </View>
        </View>
    );
};

// 样式
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 9
    },
    formContainer: {
        height: 515,
        paddingHorizontal: 24,
        paddingTop: 26,
        paddingBottom: 48,
        backgroundColor: Style.WhiteLight,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: "hidden",
        position: "relative"
    },
    backContainer: {
        height: 28
    },
    swiperContainer: {
        height: 280,
        marginTop: 16,
        width: CARD_WIDTH
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    paginationStyle: {
        bottom: 10,
    },
    bottomContainer: {
        height: 89,
        gap: 8,
        marginTop: 28,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        height: 280,
        flexDirection: 'column',
        overflow: 'visible'
    },
    cardText: {
        fontSize: 18,
        fontWeight: 600,
        color: Style.MonoMediumDar
    },
    cardSelectItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Style.GrayLightMedium,
        borderRadius: 100,
        height: 65
    },
    cardSelect: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 227,
        gap: 13
    },
    cardSelectItemSelect: {
        borderColor: Style.BlackDark,
        borderWidth: 1
    }
});

export default BottomBox;