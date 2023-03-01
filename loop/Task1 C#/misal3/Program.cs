// See https://aka.ms/new-console-template for more information
Console.WriteLine("  N daxil edin");
int N = Convert.ToInt32(Console.ReadLine());
Console.WriteLine(" M daxil edin");
int M = Convert.ToInt32(Console.ReadLine());
int count = 0;
if (N > M) 
{ for (int i = M; i < N; i++) 
    {
        if ( i%2 == 1) 
        {
            count++;
        
        }
    }


}
else
{
    Console.WriteLine("M Nden boyukdur");
}
Console.WriteLine(count);
