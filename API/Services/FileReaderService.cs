using System.IO;
using System.Text;
using System.Threading.Tasks;
using API.Interfaces;
using Microsoft.Extensions.Logging;

namespace API.Services
{
    public class FileReaderService : IFileReaderService
    {
        private readonly ILogger _logger;
        public FileReaderService(ILogger logger)
        {
            _logger = logger;

        }
        public async Task<string> ReadTextAsync(string filePath)
        {
            using var sourceStream =
                new FileStream(
                    filePath,
                    FileMode.Open, FileAccess.Read, FileShare.Read,
                    bufferSize: 4096, useAsync: true);

            var sb = new StringBuilder();

            byte[] buffer = new byte[0x1000];
            int numRead;
            while ((numRead = await sourceStream.ReadAsync(buffer, 0, buffer.Length)) != 0)
            {
                string text = Encoding.Unicode.GetString(buffer, 0, numRead);
                sb.Append(text);
            }
            _logger.LogInformation(sb.ToString());
            return sb.ToString();
        }
    }
}