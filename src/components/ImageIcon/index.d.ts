import { ImageProps, ViewProps } from 'react-native';

interface BoxProps extends ViewProps {
  background?: string;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  alignSelf?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  flex?: number;
  square?: number;
  circle?: number;
  shadowDepth?: number;
  width?: string | number;
  height?: string | number;
  margin?: number | [number, number] | [number, number, number, number];
  padding?: number | [number, number] | [number, number, number, number];
}

interface ImageIconProps extends ImageProps {
  size?: number;
  boxProps?: BoxProps;
  margin?: number | [number, number] | [number, number, number, number];
  padding?: number | [number, number] | [number, number, number, number];
  pressable?: boolean;
  name:
    | 'LOGO'
    | 'LEFT_ARROW'
    | 'COCO'
    | 'CS_NEWS'
    | 'NEWS'
    | 'ARROW_RIGHT'
    | 'ATOM'
    | 'BACK'
    | 'BOOK_OPEN'
    | 'CAMERA'
    | 'CLOCK'
    | 'DIAMOND'
    | 'EMAIL'
    | 'FLAG'
    | 'GIFT'
    | 'GUITAR'
    | 'IDEA'
    | 'KEY'
    | 'TABLE_LAMP'
    | 'ARROW_LEFT'
    | 'SMART_PHONE'
    | 'PLANE'
    | 'SAND_CLOCK'
    | 'PIGGY_BANK'
    | 'TARGET'
    | 'TROPHY'
    | 'AVATAR1'
    | 'AVATAR2'
    | 'AVATAR3'
    | 'AVATAR4'
    | 'AVATAR5'
    | 'AVATAR6'
    | 'AVATAR7'
    | 'AVATAR8'
    | 'AVATAR9'
    | 'AVATAR10'
    | 'AVATAR11'
    | 'AVATAR12'
    | 'AVATAR13'
    | 'AVATAR14'
    | 'AVATAR15'
    | 'AVATAR16'
    | 'AVATAR17'
    | 'AVATAR18'
    | 'AVATAR19'
    | 'AVATAR20'
    | 'AVATAR21'
    | 'AVATAR22'
    | 'AVATAR23'
    | 'AVATAR24'
    | 'AVATAR25'
    | 'AVATAR26'
    | 'AVATAR27'
    | 'AVATAR28'
    | 'AVATAR29'
    | 'AVATAR30'
    | 'AVATAR31'
    | 'AVATAR32'
    | 'AVATAR33'
    | 'AVATAR34'
    | 'AVATAR35'
    | 'AVATAR36'
    | 'AVATAR37'
    | 'AVATAR38'
    | 'AVATAR39'
    | 'AVATAR40'
    | 'AVATAR41'
    | 'AVATAR42'
    | 'AVATAR43'
    | 'AVATAR44'
    | 'AVATAR45'
    | 'AVATAR46'
    | 'AVATAR47'
    | 'AVATAR48'
    | 'AVATAR49'
    | 'AVATAR50'
    | 'USER'
    | 'BELL'
    | 'SECURITY'
    | 'SEARCH'
    | 'CALENDAR'
    | 'SEARCHING'
    | 'PHONE'
    | 'NEXT'
    | 'NEW_POEM'
    | 'LOGOUT'
    | 'EDIT'
    | 'DONE'
    | 'BATTERY'
    | 'BOY_BACKGROUND'
    | 'GIRL_BACKGROUND'
    | 'GOODNIGHT'
    | 'MESSAGE_BACKGROUND'
    | 'TEAMWORK'
    | 'WRITE_BACKGROUND'
    | 'CLOSE'
    | 'SAVE';
}

export default function ImageIcon(props: ImageIconProps): {};
