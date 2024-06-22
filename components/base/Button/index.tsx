import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, GestureResponderEvent, ViewStyle, Image, ImageSourcePropType } from 'react-native';
import { noFunc } from '../../../Common/utils';
import { Style } from '../../../Common/styles';

export const enum BtnType {
  primary = 'weChat',
  second = 'phone'
}

/**
 * Icon
 */
export const enum BtnIcon {
  weChat = "weChat",
  phone = "phone",
}

type propsType = {
  title: string,
  type?: BtnType,
  isDisabled?: boolean,
  style?: ViewStyle,
  icon?: BtnIcon,
  iconPos?: 'left' | 'right',
  onClick?: (event: GestureResponderEvent) => void,
}

const CustomButton = (props: propsType) => {
  const {
    title,
    style = {},
    type = BtnType.primary,
    isDisabled = false,
    icon = null,
    iconPos = 'left'
  } = props;
  let { onClick = noFunc } = props;
  const [isHovered, setIsHovered] = useState(false);
  // 禁用点击
  if (isDisabled) onClick = noFunc;

  const hasIcon = !!icon;
  const handlePressIn = () => {
    if (isDisabled) return;
    setIsHovered(true);
  };

  const handlePressOut = () => {
    if (isDisabled) return;
    setIsHovered(false);
  };
  // btn type 样式
  const typeStyle = (() => {
    switch (type) {
      case BtnType.second: return styles.secondBtn;
      default: return styles.primaryBtn
    }
  })();
  // 状态样式
  const statusStyle = (() => {
    if (isDisabled) {
      return {
        ...styles.disabled,
        ...(type === BtnType.second ? {
          backgroundColor: Style.GrayLight,
          borderColor: Style.GrayMedium
        } : {})
      }
    }
    else if (isHovered) {
      if (type === BtnType.second) return styles.secondHover;
      return styles.hover;
    }
    else return {};
  })();
  // 状态文本样式
  const statusTextStyle = (() => {
    if (isDisabled) {
      return {
        ...styles.disabledText,
        ...(type === BtnType.second ? {
          color: Style.GrayMedium
        } : {})
      };
    } else if (isHovered) {
      if (type === BtnType.second) return styles.secondHoverText;
      return styles.hoverText;;
    } else return {};
  })();

  const iconSource = (() => {
    if (!hasIcon) return;
    switch (icon) {
      case BtnIcon.weChat: return require("../../../Assets/Images/Icon/wechat.png");
      case BtnIcon.phone: return require("../../../Assets/Images/Icon/phone.png");
    }
  })();
  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
      onPress={onClick}
    >
      <View
        style={[
          styles.btn,
          typeStyle,
          statusStyle,
          style
        ]}
      >
        {
          iconSource && iconPos === 'left' 
            && <Image style={styles.icon} source={iconSource} />
        }
        <Text style={[
          styles.text,
          statusTextStyle
        ]}>{title}</Text>
        {
          iconSource && iconPos === 'right' 
            && <Image style={styles.icon} source={iconSource} />
        }
      </View>
    </TouchableOpacity>
  );
};

// 样式
const styles = StyleSheet.create({
  outShadowBox: {
    shadowColor: "#343C4429"
  },
  btn: {
    width: 200,
    height: 58,
    backgroundColor: Style.WhiteLight,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    flexDirection: 'row'
  },
  primaryBtn: {
    ...Style.Shadow.btn
  },
  icon: {
    width: 22,
    height: 22
  },
  secondBtn: {
    borderColor: Style.BlackDark,
    borderWidth: 1,
    backgroundColor: Style.WhiteLight,
    borderRadius: 100
  },
  disabled: {
    backgroundColor: Style.GrayLight,
    ...Style.Shadow.btn
  },
  hover: {
    borderColor: Style.GrayLight,
    borderWidth: 4,
    backgroundColor: "#272727",
    borderRadius: 100
  },
  secondHover: {
    borderColor: Style.GrayMedium,
    borderWidth: 4,
    borderRadius: 100
  },
  text: {
    color: Style.BlackDark,
    fontSize: 16,
    fontWeight: 600
  },
  disabledText: {
    color: Style.WhiteLight
  },
  hoverText: {
    color: "#F9FAFB"
  },
  secondHoverText: {
    color: Style.GrayMedium
  },
});

export default CustomButton;