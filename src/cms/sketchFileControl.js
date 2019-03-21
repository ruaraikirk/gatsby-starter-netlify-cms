import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styled from '@emotion/styled';
import { css } from '@emotion/core'; // new
import { Map, List } from 'immutable';
import { once } from 'lodash';
import uuid from 'uuid/v4';
import { oneLine } from 'common-tags';
//import { lengths, components, buttons, borders, effects, shadows } from 'netlify-cms-ui-default';

/*
* Styles for: lengths, components, buttons, borders, effects, shadows
*/
/**
 * Theme Colors
 */
const colorsRaw = {
    white: '#fff',
    grayLight: '#eff0f4',
    gray: '#798291',
    grayDark: '#313d3e',
    blue: '#3a69c7',
    blueLight: '#e8f5fe',
    green: '#005614',
    greenLight: '#caef6f',
    brown: '#754e00',
    yellow: '#ffee9c',
    red: '#ff003b',
    redLight: '#fcefea',
    purple: '#70399f',
    purpleLight: '#f6d8ff',
    teal: '#17a2b8',
    tealLight: '#ddf5f9',
  };
  
const colors = {
    statusDraftText: colorsRaw.purple,
    statusDraftBackground: colorsRaw.purpleLight,
    statusReviewText: colorsRaw.Brown,
    statusReviewBackground: colorsRaw.yellow,
    statusReadyText: colorsRaw.green,
    statusReadyBackground: colorsRaw.greenLight,
    text: colorsRaw.gray,
    textLight: colorsRaw.white,
    textLead: colorsRaw.grayDark,
    background: colorsRaw.grayLight,
    foreground: colorsRaw.white,
    active: colorsRaw.blue,
    activeBackground: colorsRaw.blueLight,
    inactive: colorsRaw.gray,
    button: colorsRaw.gray,
    buttonText: colorsRaw.white,
    inputBackground: colorsRaw.white,
    infoText: colorsRaw.blue,
    infoBackground: colorsRaw.blueLight,
    successText: colorsRaw.green,
    successBackground: colorsRaw.greenLight,
    warnText: colorsRaw.brown,
    warnBackground: colorsRaw.yellow,
    errorText: colorsRaw.red,
    errorBackground: colorsRaw.redLight,
    textFieldBorder: '#dfdfe3',
    controlLabel: '#7a8291',
    checkerboardLight: '#f2f2f2',
    checkerboardDark: '#e6e6e6',
  };
  
const lengths = {
    topBarHeight: '56px',
    inputPadding: '16px 20px',
    borderRadius: '5px',
    richTextEditorMinHeight: '300px',
    borderWidth: '2px',
    topCardWidth: '682px',
    pageMargin: '28px 18px',
    objectWidgetTopBarContainerPadding: '0 14px 14px',
  };
  
const borders = {
    textField: `solid  ${lengths.borderWidth} ${colors.textFieldBorder}`,
  };
 /* 
const transitions = {
    main: '.2s ease',
  };
 */ 
const shadows = {
    drop: css`
      box-shadow: 0 2px 4px 0 rgba(19, 39, 48, 0.12);
    `,
    dropMain: css`
      box-shadow: 0 2px 6px 0 rgba(68, 74, 87, 0.05), 0 1px 3px 0 rgba(68, 74, 87, 0.1);
    `,
    dropMiddle: css`
      box-shadow: 0 2px 6px 0 rgba(68, 74, 87, 0.15), 0 1px 3px 0 rgba(68, 74, 87, 0.3);
    `,
    dropDeep: css`
      box-shadow: 0 4px 12px 0 rgba(68, 74, 87, 0.15), 0 1px 3px 0 rgba(68, 74, 87, 0.25);
    `,
    inset: css`
      box-shadow: inset 0 0 4px rgba(68, 74, 87, 0.3);
    `,
  };
  
const gradients = {
    checkerboard: `
      linear-gradient(
        45deg,
        ${colors.checkerboardDark} 25%,
        transparent 25%,
        transparent 75%,
        ${colors.checkerboardDark} 75%,
        ${colors.checkerboardDark}
      )
    `,
  };
  
const effects = {
    checkerboard: css`
      background-color: ${colors.checkerboardLight};
      background-size: 16px 16px;
      background-position: 0 0, 8px 8px;
      background-image: ${gradients.checkerboard}, ${gradients.checkerboard};
    `,
  };
  
const badge = css`
    font-size: 13px;
    line-height: 1;
  `;
  
const backgroundBadge = css`
    ${badge};
    display: block;
    border-radius: ${lengths.borderRadius};
    padding: 4px 10px;
    text-align: center;
  `;
  
const textBadge = css`
    ${badge};
    display: inline-block;
    font-weight: 700;
    text-transform: uppercase;
  `;
  
const card = css`
    ${shadows.dropMain};
    border-radius: 5px;
    background-color: #fff;
  `;
  
const buttons = {
    button: css`
      border: 0;
      border-radius: ${lengths.borderRadius};
      cursor: pointer;
    `,
    default: css`
      height: 36px;
      line-height: 36px;
      font-weight: 500;
      padding: 0 15px;
      background-color: ${colorsRaw.gray};
      color: ${colorsRaw.white};
    `,
    medium: css`
      height: 27px;
      line-height: 27px;
      font-size: 12px;
      font-weight: 600;
      border-radius: 3px;
      padding: 0 24px 0 14px;
    `,
    small: css`
      height: 23px;
      line-height: 23px;
    `,
    gray: css`
      background-color: ${colors.button};
      color: ${colors.buttonText};
      &:focus,
      &:hover {
        color: ${colors.white};
        background-color: #555a65;
      }
    `,
    green: css`
      background-color: #aae31f;
      color: ${colorsRaw.green};
    `,
    lightRed: css`
      background-color: ${colorsRaw.redLight};
      color: ${colorsRaw.red};
    `,
    lightBlue: css`
      background-color: ${colorsRaw.blueLight};
      color: ${colorsRaw.blue};
    `,
    lightTeal: css`
      background-color: ${colorsRaw.tealLight};
      color: #1195aa;
    `,
    teal: css`
      background-color: ${colorsRaw.teal};
      color: ${colorsRaw.white};
    `,
    disabled: css`
      background-color: ${colorsRaw.grayLight};
      color: ${colorsRaw.gray};
    `,
  };
  
const components = {
    card,
    caretDown: css`
      color: ${colorsRaw.white};
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 6px solid currentColor;
      border-radius: 2px;
    `,
    badge: css`
      ${backgroundBadge};
      color: ${colors.infoText};
      background-color: ${colors.infoBackground};
    `,
    badgeSuccess: css`
      ${backgroundBadge};
      color: ${colors.successText};
      background-color: ${colors.successBackground};
    `,
    badgeDanger: css`
      ${backgroundBadge};
      color: ${colorsRaw.red};
      background-color: #fbe0d7;
    `,
    textBadge: css`
      ${textBadge};
      color: ${colors.infoText};
    `,
    textBadgeSuccess: css`
      ${textBadge};
      color: ${colors.successText};
    `,
    textBadgeDanger: css`
      ${textBadge};
      color: ${colorsRaw.red};
    `,
    loaderSize: css`
      width: 2.28571429rem;
      height: 2.28571429rem;
    `,
    cardTop: css`
      ${card};
      width: ${lengths.topCardWidth};
      max-width: 100%;
      padding: 18px 20px;
      margin-bottom: 28px;
    `,
    cardTopHeading: css`
      font-size: 22px;
      font-weight: 600;
      line-height: 37px;
      margin: 0;
      padding: 0;
    `,
    cardTopDescription: css`
      max-width: 480px;
      color: ${colors.text};
      font-size: 14px;
      margin-top: 8px;
    `,
    objectWidgetTopBarContainer: css`
      padding: ${lengths.objectWidgetTopBarContainerPadding};
    `,
    dropdownList: css`
      ${shadows.dropDeep};
      background-color: ${colorsRaw.white};
      border-radius: ${lengths.borderRadius};
      overflow: hidden;
    `,
    dropdownItem: css`
      ${buttons.button};
      background-color: transparent;
      border-radius: 0;
      color: ${colorsRaw.gray};
      font-weight: 500;
      border-bottom: 1px solid #eaebf1;
      padding: 10px 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:last-of-type {
        border-bottom: 0;
      }
      &:hover,
      &:active,
      &:focus {
        color: ${colors.active};
        background-color: ${colors.activeBackground};
      }
    `,
  };
  
// End

const MAX_DISPLAY_LENGTH = 50;

const ImageWrapper = styled.div`
  flex-basis: 155px;
  width: 155px;
  height: 100px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: ${borders.textField};
  border-radius: ${lengths.borderRadius};
  ${effects.checkerboard};
  ${shadows.inset};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const MultiImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FileLink = styled.a`
  margin-bottom: 20px;
  font-weight: normal;
  color: inherit;
  &:hover,
  &:active,
  &:focus {
    text-decoration: underline;
  }
`;

const FileLinks = styled.div`
  margin-bottom: 12px;
`;

const FileLinkList = styled.ul`
  list-style-type: none;
`;

const FileWidgetButton = styled.button`
  ${buttons.button};
  ${components.badge};
`;

const FileWidgetButtonRemove = styled.button`
  ${buttons.button};
  ${components.badgeDanger};
  margin-top: 12px;
`;

function isMultiple(value) {
  return Array.isArray(value) || List.isList(value);
}

const warnDeprecatedOptions = once(field =>
  console.warn(oneLine`
  Netlify CMS config: ${field.get('name')} field: property "options" has been deprecated for the
  ${field.get('widget')} widget and will be removed in the next major release. Rather than
  \`field.options.media_library\`, apply media library options for this widget under
  \`field.media_library\`.
`),
);

export default function sketchFileControl({ forImage } = {}) {
  return class FileControl extends React.Component {
    static propTypes = {
      field: PropTypes.object.isRequired,
      getAsset: PropTypes.func.isRequired,
      mediaPaths: ImmutablePropTypes.map.isRequired,
      onAddAsset: PropTypes.func.isRequired,
      onChange: PropTypes.func.isRequired,
      onRemoveInsertedMedia: PropTypes.func.isRequired,
      onOpenMediaLibrary: PropTypes.func.isRequired,
      onClearMediaControl: PropTypes.func.isRequired,
      onRemoveMediaControl: PropTypes.func.isRequired,
      classNameWrapper: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    };

    static defaultProps = {
      value: '',
    };

    constructor(props) {
      super(props);
      this.controlID = uuid();
    }

    shouldComponentUpdate(nextProps) {
      /**
       * Always update if the value changes.
       */
      if (this.props.value !== nextProps.value) {
        return true;
      }

      /**
       * If there is a media path for this control in the state object, and that
       * path is different than the value in `nextProps`, update.
       */
      const mediaPath = nextProps.mediaPaths.get(this.controlID);
      if (mediaPath && nextProps.value !== mediaPath) {
        return true;
      }

      return false;
    }

    componentDidUpdate() {
      const { mediaPaths, value, onRemoveInsertedMedia, onChange } = this.props;
      const mediaPath = mediaPaths.get(this.controlID);
      if (mediaPath && mediaPath !== value) {
        onChange(mediaPath);
      } else if (mediaPath && mediaPath === value) {
        onRemoveInsertedMedia(this.controlID);
      }
    }

    componentWillUnmount() {
      this.props.onRemoveMediaControl(this.controlID);
    }

    handleChange = e => {
      const { field, onOpenMediaLibrary, value } = this.props;
      e.preventDefault();
      let mediaLibraryFieldOptions;

      /**
       * `options` hash as a general field property is deprecated, only used
       * when external media libraries were first introduced. Not to be
       * confused with `options` for the select widget, which serves a different
       * purpose.
       */
      if (field.hasIn(['options', 'media_library'])) {
        warnDeprecatedOptions(field);
        mediaLibraryFieldOptions = field.getIn(['options', 'media_library'], Map());
      } else {
        mediaLibraryFieldOptions = field.get('media_library', Map());
      }

      return onOpenMediaLibrary({
        controlID: this.controlID,
        forImage,
        privateUpload: field.get('private'),
        value,
        allowMultiple: !!mediaLibraryFieldOptions.get('allow_multiple', true),
        config: mediaLibraryFieldOptions.get('config'),
      });
    };

    handleRemove = e => {
      e.preventDefault();
      this.props.onClearMediaControl(this.controlID);
      return this.props.onChange('');
    };

    renderFileLink = value => {
      const size = MAX_DISPLAY_LENGTH;
      if (!value || value.length <= size) {
        return value;
      }
      const text = `${value.substring(0, size / 2)}\u2026${value.substring(
        value.length - size / 2 + 1,
        value.length,
      )}`;
      return (
        <FileLink href={value} rel="noopener" target="_blank">
          {text}
        </FileLink>
      );
    };

    renderFileLinks = () => {
      const { value } = this.props;

      if (isMultiple(value)) {
        return (
          <FileLinks>
            <FileLinkList>
              {value.map(val => (
                <li key={val}>{this.renderFileLink(val)}</li>
              ))}
            </FileLinkList>
          </FileLinks>
        );
      }
      return <FileLinks>{this.renderFileLink(value)}</FileLinks>;
    };

    renderImages = () => {
      const { getAsset, value } = this.props;
      if (isMultiple(value)) {
        return (
          <MultiImageWrapper>
            {value.map(val => (
              <ImageWrapper key={val}>
                <Image src={getAsset(val)} />
              </ImageWrapper>
            ))}
          </MultiImageWrapper>
        );
      }
      return (
        <ImageWrapper>
          <Image src={getAsset(value)} />
        </ImageWrapper>
      );
    };

    renderSelection = subject => (
      <div>
        {forImage ? this.renderImages() : null}
        <div>
          {forImage ? null : this.renderFileLinks()}
          <FileWidgetButton onClick={this.handleChange}>
            Choose different {subject}
          </FileWidgetButton>
          <FileWidgetButtonRemove onClick={this.handleRemove}>
            Remove {subject}
          </FileWidgetButtonRemove>
        </div>
      </div>
    );

    renderNoSelection = (subject, article) => (
      <FileWidgetButton onClick={this.handleChange}>
        Choose {article} {subject}
      </FileWidgetButton>
    );

    // Advanced validation of .sketch file
    isValid = () => {
        // Validation logic to be inserted here
      console.log("Validation Passed");
      return false;
    };

    render() {
      const { value, classNameWrapper } = this.props;
      const subject = forImage ? 'image' : 'file';
      const article = forImage ? 'an' : 'a';

      return (
        <div className={classNameWrapper}>
          <span>
            {value ? this.renderSelection(subject) : this.renderNoSelection(subject, article)}
          </span>
        </div>
      );
    }
  };
}