using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IFileReaderService
    {
        Task<string> ReadTextAsync(string filePath);
    }
}