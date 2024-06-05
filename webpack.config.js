// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.(css|scss)$/,
//         use: ['style-loader', 'css-loader', 'sass-loader'],
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: '[path][name].[ext]',
//             },
//           },
//         ],
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
//   devServer: {
//     contentBase: path.join(__dirname, 'dist'),
//     compress: true,
//     port: 9000,
//   },
// };

const path = require('path');

module.exports = {
  entry: './src/index.js', // Основной файл, с которого начинается сборка
  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist'), // Путь к директории, где будет находиться выходной файл
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Проверка на JavaScript и JSX файлы
        exclude: /node_modules/, // Исключение для директории node_modules
        use: {
          loader: 'babel-loader', // Использование babel-loader для транспиляции кода
        },
      },
      {
        test: /\.(css|scss)$/, // Проверка на CSS и SCSS файлы
        use: ['style-loader', 'css-loader', 'sass-loader'], // Загрузчики для обработки CSS и SCSS файлов
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Проверка на изображения
        use: [
          {
            loader: 'file-loader', // Использование file-loader для обработки изображений
            options: {
              name: '[path][name].[ext]', // Настройка имен файлов
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Расширения файлов, которые будут обрабатываться Webpack
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Директория для dev server
    compress: true, // Включение сжатия
    port: 9000, // Порт для dev server
  },
};
