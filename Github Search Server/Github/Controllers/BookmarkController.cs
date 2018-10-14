using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using System.Web.Http;
using Github.Models;

namespace Github.Controllers
{
    public class BookmarkController : Controller
    {
        public void Index(bookmark b)
        {
            string sessionID = HttpContext.Session.SessionID;
            var temp = new List<bookmark>();
            if(Session[sessionID] != null)
            {
                temp = (List<bookmark>) Session[sessionID];
            }
            temp.Add(b);
            Session[sessionID] = temp;
        }
    }
}