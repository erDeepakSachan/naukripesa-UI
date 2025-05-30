
import type { EditorConfig } from 'ckeditor5';
import { ClassicEditor } from 'ckeditor5';
import {
  Autoformat,
  AutoImage,
  Autosave,
  BlockQuote,
  Bold,
  CloudServices,
  Emoji,
  Essentials,
  Heading,
  ImageBlock,
  ImageCaption,
  ImageInline,
  ImageInsertViaUrl,
  ImageResize,
  ImageStyle,
  ImageTextAlternative,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  LinkImage,
  List,
  ListProperties,
  MediaEmbed,
  Mention,
  Paragraph,
  PasteFromOffice,
  Table,
  TableCaption,
  TableCellProperties,
  TableColumnResize,
  TableProperties,
  TableToolbar,
  TextTransformation,
  TodoList,
  Underline
} from 'ckeditor5';

const LICENSE_KEY = 'GPL';

export const CKEDITOR_EDITOR = ClassicEditor;

export const CKEDITOR_CONFIG: EditorConfig = {
  plugins: [
    Autoformat,
    AutoImage,
    Autosave,
    BlockQuote,
    Bold,
    CloudServices,
    Emoji,
    Essentials,
    Heading,
    ImageBlock,
    ImageCaption,
    ImageInline,
    ImageInsertViaUrl,
    ImageResize,
    ImageStyle,
    ImageTextAlternative,
    ImageToolbar,
    ImageUpload,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    ListProperties,
    MediaEmbed,
    Mention,
    Paragraph,
    PasteFromOffice,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextTransformation,
    TodoList,
    Underline
  ],
  toolbar: {
    items: [
      'undo','redo','|',
      'heading','|',
      'bold','italic','underline','|',
      'emoji','link','mediaEmbed','insertTable','blockQuote','|',
      'bulletedList','numberedList','todoList','outdent','indent'
    ],
    shouldNotGroupWhenFull: false
  },
  heading: {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      { model: 'heading1',  view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
      { model: 'heading2',  view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
      { model: 'heading3',  view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
      { model: 'heading4',  view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
      { model: 'heading5',  view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
      { model: 'heading6',  view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' }
    ]
  },
  image: {
    toolbar: [
      'toggleImageCaption',
      'imageTextAlternative',
      '|',
      'imageStyle:inline',
      'imageStyle:wrapText',
      'imageStyle:breakText',
      '|',
      'resizeImage'
    ]
  },
  table: {
    contentToolbar: [
      'tableColumn','tableRow','mergeTableCells',
      'tableProperties','tableCellProperties'
    ]
  },
  link: {
    addTargetToExternalLinks: true,
    defaultProtocol: 'https://',
    decorators: {
      toggleDownloadable: {
        mode: 'manual',
        label: 'Downloadable',
        attributes: { download: 'file' }
      }
    }
  },
  mention: {
    feeds: [
      {
        marker: '@',
        feed: [] // your mention feed
      }
    ]
  },
  placeholder: 'Type or paste your content here!',
  initialData: ``,
  licenseKey: LICENSE_KEY,
};